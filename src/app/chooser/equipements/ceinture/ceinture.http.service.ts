import {Injectable} from '@angular/core'

import {
  Critique,
  Dommages,
  DommagesAir,
  DommagesCritiques,
  DommagesEau,
  DommagesFeu,
  DommagesNeutre,
  DommagesTerre,
  Force,
  Fuite,
  PA,
  PO,
  Pods,
  Puissance,
  ResistanceAir,
  ResistanceEau,
  ResistanceNeutre,
  ResistanceTerre,
  Sagesse,
  Soins,
  Tacle,
  Vitalite
} from '../../../shared/entities/Statistique'
import {Equipement} from '../../../shared/entities/Equipement'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Injectable()
export class CeintureHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipement(
          1,
          'Ceinture Du Bouftou Royal',
          31,
          'Ceinture',
          '../assets/ceinturebouftouroyal.webp',
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
        ),
        new Equipement(
          1,
          'Ceintacé',
          200,
          'Ceinture',
          '../assets/ceintace.webp',
          [
            new Vitalite(301, 350),
            new Puissance(31, 50),
            new Sagesse(31, 40),
            new Fuite(-10, -10),
            new DommagesCritiques(16, 20),
            new Critique(3, 4),
            new PA(1, 1),
            new ResistanceNeutre(7, 10),
            new ResistanceEau(7, 10)
          ]
        ),
        new Equipement(
          1,
          'Ceinture du meulon',
          125,
          'Ceinture',
          '../assets/ceinturemeulou.webp',
          [
            new Force(31, 50),
            new Vitalite(151, 200),
            new Sagesse(26, 40),
            new Dommages(4, 6),
            new PO(1, 1),
            new ResistanceNeutre(3, 4),
            new ResistanceEau(3, 4),
            new ResistanceAir(-4, -7),
          ]
        ),
        new Equipement(
          1,
          'Ceinture volkorne',
          200,
          'Ceinture',
          '../assets/ceinturevolkorne.webp',
          [
            new Vitalite(301, 400),
            new Force(81, 100),
            new Sagesse(31, 40),
            new DommagesTerre(16, 20),
            new DommagesNeutre(16, 20),
            new Critique(4, 5),
            new PO(1, 1),
            new ResistanceNeutre(7, 10),
            new ResistanceTerre(7, 10)
          ]
        ),
        new Equipement(
          14096,
          'Ceinture du strigide',
          200,
          'Ceinture',
          '../assets/ceinturestrigide.webp',
          [
            new Vitalite(301, 350),
            new Sagesse(31, 50),
            new Soins(5, 7),
            new Critique(5, 7),
            new Puissance(41, 60),
            new DommagesNeutre(7, 10),
            new DommagesTerre(7, 10),
            new DommagesFeu(7, 10),
            new DommagesEau(7, 10),
            new DommagesAir(7, 10),
            new Tacle(7, 10),
            new DommagesCritiques(11, 15),
            new ResistanceNeutre(6, 8)
          ]
        )
      ])
    } else {
      const armes: Equipement[] = []
      return fetch('https://dofapi2.herokuapp.com/equipments?filter[offset]=0&filter[limit]=2&filter[skip]=0')
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
