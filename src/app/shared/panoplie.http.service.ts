import {Injectable} from '@angular/core'
import {environment} from '../../environments/environment'
import {DommagesCritiques, PA, Puissance, Vitalite} from '../domain/Statistique'
import {StatistiquesService} from './statistiques.service'
import {Bonus, Panoplie} from '../domain/Panoplie'

@Injectable()
export class PanoplieHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllPanoplie(): Promise<Panoplie[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Panoplie(
          274,
          'Panoplie du Strigide',
          200,
          'Panoplie',
          'https://s.ankama.com/www/static.ankama.com/dofus/renderer/look/7b317c38302c323132347c313d31363736353536342c323d31363' +
          '335353838332c333d31363737373138352c343d323931303036342c353d31343536313739397c3134307d/full/1/200_200-10.png',
          [
            new Bonus(
            1,
            [
              new Vitalite(100, 100),
              new Puissance(50, 50),
              new DommagesCritiques(20, 20)
            ]),
            new Bonus(
            2,
            [
              new Vitalite(100, 100),
              new Puissance(50, 50),
              new DommagesCritiques(20, 20),
              new PA(1, 1)
            ])
          ]
        )
      ])
    } else {
      const panoplies: Panoplie[] = []
      return fetch('https://dofapi2.herokuapp.com/sets?filter[offset]=0&filter[limit]=2&filter[skip]=0')
        .then(r => r.json())
        .then(json => {
          json.map(item => panoplies.push(
            new Panoplie(
              item._id,
              item.name,
              parseInt(item.lvl),
              item.type,
              item.imgUrl,
              item.bonus.map(bonus => {
                  return new Bonus(
                    bonus.number,
                    bonus.stats.map(stat => this.statistiquesService.extractor(stat))
                  )
                }
              )
            )))
          return panoplies
        })
    }
  }
}
