import {Injectable} from '@angular/core'

import {
  Agilite,
  Chance,
  Critique,
  DommagesAir,
  DommagesCritiques,
  DommagesEau,
  DommagesFeu,
  DommagesTerre,
  Force,
  Intelligence
} from '../../../domain/Statistique'
import {Equipement} from '../../../domain/Equipement'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Injectable()
export class FamilierHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipement(
          1,
          'Pioute Verte',
          1,
          'Familier',
          '../assets/piouteverte.webp',
          [
            new Force(120, 120),
            new DommagesCritiques(40, 40),
          ]
        ),
        new Equipement(
          1,
          'Pioute Rouge',
          1,
          'Familier',
          '../assets/piouterouge.webp',
          [
            new Intelligence(120, 20),
            new DommagesCritiques(40, 40),
          ]
        ),
        new Equipement(
          1,
          'Pioute Bleu',
          1,
          'Familier',
          '../assets/pioutebleu.webp',
          [
            new Chance(120, 20),
            new DommagesCritiques(40, 40),
          ]
        ),
        new Equipement(
          1,
          'Pioute Jaune',
          1,
          'Familier',
          '../assets/pioutejaune.webp',
          [
            new Agilite(120, 20),
            new DommagesCritiques(40, 40),
          ]
        ),
        new Equipement(
          1,
          'Kokulte',
          1,
          'Familier',
          '../assets/kokulte.png',
          [
            new DommagesCritiques(40, 40),
            new Critique(15, 15),
          ]
        ),
        new Equipement(
          1,
          'Bulbisou',
          80,
          'Familier',
          '../assets/bulbisou.webp',
          [
            new DommagesTerre(20, 20),
            new Force(120, 120),
          ]
        ),
        new Equipement(
          1,
          'Kanigloups',
          80,
          'Familier',
          '../assets/kanigloups.webp',
          [
            new DommagesEau(20, 20),
            new Chance(120, 120),
          ]
        ),
        new Equipement(
          1,
          'Blerodoudou',
          80,
          'Familier',
          '../assets/blerodoudou.webp',
          [
            new DommagesAir(20, 20),
            new Agilite(120, 120),
          ]
        ),
        new Equipement(
          1,
          'Bisouglours',
          80,
          'Familier',
          '../assets/bisouglours.webp',
          [
            new DommagesFeu(20, 20),
            new Intelligence(120, 120),
          ]
        )
      ])
    } else {
      const armes: Equipement[] = []
      return fetch('https://dofapi2.herokuapp.com/pets?filter[offset]=0&filter[limit]=1000&filter[skip]=0')
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
