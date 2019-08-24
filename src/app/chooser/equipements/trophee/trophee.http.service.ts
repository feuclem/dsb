import {Injectable} from '@angular/core'

import {Agilite, Force, Intelligence, PM, Puissance} from '../../../shared/entities/Statistique'
import {Equipement} from '../../../shared/entities/Equipement'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/service/statistiques.service'

@Injectable()
export class TropheeHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipement(
          1,
          'Vigoureux majeur',
          150,
          'Trophée',
          '../assets/vigoureuxmajeur.webp',
          [
            new Puissance(80, 80)
          ]
        ),
        new Equipement(
          1,
          'Erudit majeur',
          150,
          'Trophée',
          '../assets/eruditmajeur.webp',
          [
            new Intelligence(100, 100)
          ]
        ),
        new Equipement(
          1,
          'Engaré majeur',
          150,
          'Trophée',
          '../assets/enragemajeur.webp',
          [
            new Force(100, 100)
          ]
        ),
        new Equipement(
          1,
          'Cascadeur majeur',
          150,
          'Trophée',
          '../assets/cascadeurmajeur.webp',
          [
            new Agilite(100, 100)
          ]
        ),
        new Equipement(
          1,
          'Chanceux majeur',
          150,
          'Trophée',
          '../assets/chanceuxmajeur.webp',
          [
            new Agilite(100, 100)
          ]
        ),
        new Equipement(
          1,
          'Nomage',
          100,
          'Trophée',
          '../assets/nomage.webp',
          [
            new PM(1, 1)
          ]
        ),
        new Equipement(
          1,
          'Remueur',
          100,
          'Trophée',
          '../assets/remueur.webp',
          [
            new PM(1, 1)
          ]
        ),
        new Equipement(
          1,
          'Miraculé majeur',
          100,
          'Trophée',
          '../assets/miraculemajeur.webp',
          [
            new PM(1, 1)
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
