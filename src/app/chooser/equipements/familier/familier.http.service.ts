import {Injectable} from '@angular/core'

import {DommagesCritiques, Force, Vitalite} from '../../../domain/Statistique'
import {Equipements} from '../../../domain/Equipements'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Injectable()
export class FamilierHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipements[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipements(
          1,
          'Pioute Verte',
          1,
          'Familier',
          '../assets/18026.webp',
          [
            new Force(
              120,
              120
            ),
            new DommagesCritiques(
              20,
              20
            ),
          ]
        )
      ])
    } else {
      const armes: Equipements[] = []
      return fetch('https://dofapi2.herokuapp.com/pets?filter[offset]=0&filter[limit]=1000&filter[skip]=0')
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
