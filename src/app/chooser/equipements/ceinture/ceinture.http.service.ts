import {Injectable} from '@angular/core'

import {
  Agilite, ArmeDeChasse,
  Chance, Critique,
  Dommages,
  DommagesAir,
  DommagesAirArme,
  DommagesEau,
  DommagesEauArme,
  DommagesFeu,
  DommagesFeuArme,
  DommagesNeutre,
  DommagesNeutreArme,
  DommagesTerre,
  Force,
  Fuite,
  Intelligence,
  PA,
  PM,
  PO, Pods,
  Puissance, ResistanceAir, ResistanceCritiques, ResistanceEau,
  ResistanceFeu, ResistanceFixeAir, ResistanceFixeEau,
  ResistanceFixeFeu,
  ResistanceFixNeutre,
  ResistanceFixTerre,
  ResistanceNeutre, ResistancePoussees,
  ResistanceTerre,
  RetraitPA,
  RetraitPM, Soins,
  Tacle,
  Vitalite
} from '../../../../domain/Statistique'
import {Equipements} from '../../../../domain/Equipements'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Injectable()
export class CeintureHttpService {

  constructor(private statistiquesService: StatistiquesService) {}

  getAllEquipements(): Promise<Equipements[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipements(
          1,
          'Ceinture Du Bouftou Royal',
          31,
          'Bottes',
          '../assets/10031.webp',
          [
            new Vitalite(
              51,
              70
            ),
            new Critique(
              2,
              2
            ),
            new Pods(
              151,
              200
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
