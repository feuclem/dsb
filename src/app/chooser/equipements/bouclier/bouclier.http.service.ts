import {Injectable} from '@angular/core'

import {Critique, DommagesCritiques, DommagesMelee, Puissance} from '../../../../domain/Statistique'
import {Equipements} from '../../../../domain/Equipements'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Injectable()
export class BouclierHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipements[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipements(
          1,
          'Bouclier du Captain Amakna',
          200,
          'Bouclier',
          '../assets/82014.webp',
          [
            new Puissance(
              21,
              30
            ),
            new Critique(
              4,
              6
            ),
            new DommagesCritiques(
              9,
              12
            ),
            new DommagesMelee(
              11,
              15
            ),
          ]
        )
      ])
    } else {
      const armes: Equipements[] = []
      return fetch('https://dofapi2.herokuapp.com/equipments?filter[offset]=0&filter[limit]=1000&filter[skip]=0')
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
