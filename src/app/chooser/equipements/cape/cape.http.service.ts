import {Injectable} from '@angular/core'

import {Force, ResistanceTerre, Vitalite} from '../../../domain/Statistique'
import {Equipements} from '../../../domain/Equipements'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Injectable()
export class CapeHttpService {

  constructor(private statistiquesService: StatistiquesService) {}

  getAllEquipements(): Promise<Equipements[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipements(
          1,
          'Cape Du Bouftou Royal',
          32,
          'Cape',
          '../assets/17046.webp',
          [
            new Vitalite(
              16,
              20
            ),
            new Force(
              21,
              30
            ),
            new ResistanceTerre(
              2,
              3
            ),
          ]
        )
      ])
    } else {
      const armes: Equipements[] = []
      return fetch('https://dofapi2.herokuapp.com/equipments?filter[offset]=0&filter[limit]=2&filter[skip]=0')
        .then(r => r.json())
        .then(json => {
          json.map(item => armes.push(
            new Equipements(
              item._id,
              item.name,
              parseInt(item.lvl),
              item.type,
              item.imgUrl,
              item.stats.map(stat => this.statistiquesService.extractor(stat))
            )
          ))
          return armes
        })
    }
  }
}
