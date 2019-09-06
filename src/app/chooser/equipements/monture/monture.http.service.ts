import {Injectable} from '@angular/core'

import {Critique, Force, PA, PM, Puissance, Vitalite} from '../../../shared/entities/Statistique'
import {Equipement} from '../../../shared/entities/Equipement'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/service/statistiques.service'

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
      return fetch(environment.apiUrl + 'montures/all?page=1')
        .then(r => r.json())
        .then(json => {
          json.map(item => armes.push(
            new Equipement(
              item._id,
              item.name,
              parseInt(item.lvl),
              item.type,
              environment.staticUrl + 'montures/' + item.name.replace(/ /g, '') + '.png',
              item.stats.map(stat => this.statistiquesService.extractor(stat))
            )
          ))
          return armes
        })
    }
  }
}
