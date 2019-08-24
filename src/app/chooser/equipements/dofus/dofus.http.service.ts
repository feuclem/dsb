import {Injectable} from '@angular/core'

import {
  Critique,
  PA,
  PM,
  Puissance,
  ResistanceFixeAir,
  ResistanceFixeEau,
  ResistanceFixeFeu,
  ResistanceFixeTerre
} from '../../../shared/entities/Statistique'
import {Equipement} from '../../../shared/entities/Equipement'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/service/statistiques.service'

@Injectable()
export class DofusHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipement(
          1,
          'Dofus pourpre',
          110,
          'Dofus',
          '../assets/dofuspourpre.webp',
          [
            new Puissance(80, 80)
          ]
        ),
        new Equipement(
          1,
          'Dofus abyssal',
          180,
          'Dofus',
          '../assets/dofusabyssal.webp',
          []
        ),
        new Equipement(
          1,
          'Dofus ebene',
          110,
          'Dofus',
          '../assets/dofusebene.webp',
          []
        ),
        new Equipement(
          1,
          'Dofus ivoire',
          180,
          'Dofus',
          '../assets/dofusivoire.webp',
          [
            new ResistanceFixeTerre(40, 40),
            new ResistanceFixeFeu(40, 40),
            new ResistanceFixeEau(40, 40),
            new ResistanceFixeAir(40, 40),
          ]
        ),
        new Equipement(
          1,
          'Dofus nebuleux',
          180,
          'Dofus',
          '../assets/dofusnebuleux.webp',
          []
        ),
        new Equipement(
          1,
          'Dofus ocre',
          160,
          'Dofus',
          '../assets/dofusocre.webp',
          [
            new PA(1, 1)
          ]
        ),
        new Equipement(
          1,
          'Dofus turquoise',
          160,
          'Dofus',
          '../assets/dofusturquoise.webp',
          [
            new Critique(10, 10)
          ]
        ),
        new Equipement(
          1,
          'Dofus vulbis',
          180,
          'Dofus',
          '../assets/dofusvulbis.webp',
          [
            new PM(1, 1)
          ]
        )
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
