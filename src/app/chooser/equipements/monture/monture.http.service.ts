import {Injectable} from '@angular/core'

import {Critique, Force, PA, PM, Puissance, Vitalite} from '../../../domain/Statistique'
import {Equipement} from '../../../domain/Equipement'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Injectable()
export class MontureHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipement(
          1,
          'Dragondinde pourpre',
          60,
          'Montures',
          '../assets/dragondindepourpre.webp',
          [
            new Force(100, 100),
            new Vitalite(300, 300),
          ]
        ),
        new Equipement(
          1,
          'Kwaltess',
          60,
          'Montures',
          '../assets/kwaltess.webp',
          [
            new Puissance(20, 20),
            new PA(1, 1),
          ]
        ),
        new Equipement(
          1,
          'Phorror',
          60,
          'Montures',
          '../assets/phorror.webp',
          [
            new Critique(10, 10),
            new PM(1, 1),
          ]
        ),
      ])
    } else {
      const armes: Equipement[] = []
      return fetch('https://dofapi2.herokuapp.com/mounts?filter[offset]=0&filter[limit]=1000&filter[skip]=0')
        .then(r => r.json())
        .then(json => {
          json.map(item => armes.push(
            new Equipement(
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