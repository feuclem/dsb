import {Injectable} from '@angular/core'

import {Dommages, Vitalite} from '../../../domain/Statistique'
import {Equipements} from '../../../domain/Equipements'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Injectable()
export class AnneauHttpService {

  constructor(private statistiquesService: StatistiquesService) {}

  getAllEquipements(): Promise<Equipements[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipements(
          1,
          'Anneau Du Bouftou Royal',
          31,
          'Anneau',
          '../assets/9046.webp',
          [
            new Vitalite(
              41,
              50
            ),
            new Dommages(
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
