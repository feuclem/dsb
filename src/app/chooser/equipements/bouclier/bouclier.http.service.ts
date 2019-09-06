import {Injectable} from '@angular/core'

import {
  Critique,
  DommagesAuxSorts,
  DommagesCritiques,
  DommagesDistance,
  DommagesMelee,
  Fuite,
  Puissance,
  Vitalite
} from '../../../shared/entities/Statistique'
import {Equipement} from '../../../shared/entities/Equipement'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/service/statistiques.service'

@Injectable()
export class BouclierHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipement(
          1,
          'Bouclier du Captain Amakna',
          200,
          'Bouclier',
          '../assets/boucliercaptainamakna.webp',
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
        ),
        new Equipement(
          1,
          'Quatre-feuilles',
          193,
          'Bouclier',
          '../assets/quatrefeuilles.png',
          [
            new Puissance(21, 30),
            new Critique(4, 6),
            new Fuite(9, 12),
            new DommagesDistance(11, 14),
          ]
        ),
        new Equipement(
          1,
          'Bouclier taverne',
          155,
          'Bouclier',
          '../assets/boucliertaverne.png',
          [
            new Puissance(16, 25),
            new Critique(4, 5),
            new DommagesAuxSorts(8, 11),
          ]
        ),
        new Equipement(
          1,
          'Bouclier Ilyzaelle',
          200,
          'Bouclier',
          '../assets/bouclierilyzaelle.webp',
          [
            new Vitalite(101, 150),
            new DommagesMelee(11, 15),
          ]
        )
      ])
    } else {
      const armes: Equipement[] = []
      return fetch(environment.apiUrl + 'boucliers/all?page=1')
        .then(r => r.json())
        .then(json => {
          json.map(item => armes.push(
            new Equipement(
              item._id,
              item.name,
              parseInt(item.lvl),
              item.type,
              environment.staticUrl + 'boucliers/' + item.name.replace(/ /g, '') + '.png',
              item.stats.map(stat => this.statistiquesService.extractor(stat))
            )
          ))
          return armes
        })
    }
  }
}
