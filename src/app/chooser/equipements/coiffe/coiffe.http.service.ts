import {Injectable} from '@angular/core'

import {Force, Intelligence} from '../../../domain/Statistique'
import {Equipements} from '../../../domain/Equipements'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Injectable()
export class CoiffeHttpService {

  constructor(private statistiquesService: StatistiquesService) {}

  getAllEquipements(): Promise<Equipements[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipements(
          1,
          'Coiffe Du Bouftou Royal',
          32,
          'Coiffe',
          '../assets/16042.webp',
          [
            new Force(
              21,
              30
            ),
            new Intelligence(
              21,
              30
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
