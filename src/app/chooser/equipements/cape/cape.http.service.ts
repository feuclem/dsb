import {Injectable} from '@angular/core'

import {
  Chance,
  Critique,
  Dommages,
  DommagesCritiques,
  DommagesEau,
  DommagesFeu,
  DommagesNeutre,
  DommagesTerre,
  Force,
  Fuite,
  Intelligence,
  PM,
  PO,
  Puissance,
  ResistanceAir,
  ResistanceEau,
  ResistanceFeu,
  ResistanceNeutre,
  ResistanceTerre,
  RetraitPM,
  Sagesse,
  Tacle,
  Vitalite
} from '../../../shared/entities/Statistique'
import {Equipement} from '../../../shared/entities/Equipement'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/service/statistiques.service'

@Injectable()
export class CapeHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipement(
          1,
          'Cape Du Bouftou Royal',
          32,
          'Cape',
          '../assets/capebouftouroyal.webp',
          [
            new Vitalite(
              16,
              20
            ),
            new Force(
              21,
              30
            ),
            new ResistanceTerre(
              2,
              3
            ),
          ]
        ),
        new Equipement(
          1,
          'Cape Du Meulou',
          139,
          'Cape',
          '../assets/capemeulou.webp',
          [
            new Force(31, 50),
            new Puissance(11, 15),
            new Vitalite(151, 200),
            new Sagesse(21, 30),
            new Critique(2, 3),
            new Dommages(5, 7),
            new ResistanceNeutre(5, 7),
            new ResistanceFeu(6, 10),
          ]
        ),
        new Equipement(
          1,
          'Voile d\'encre',
          191,
          'Cape',
          '../assets/voiledencre.png',
          [
            new Vitalite(251, 350),
            new Force(51, 70),
            new Intelligence(51, 70),
            new Sagesse(26, 40),
            new Dommages(6, 10),
            new PO(1, 1),
            new Critique(2, 3),
            new ResistanceFeu(7, 10),
            new ResistanceEau(7, 10),
            new ResistanceAir(7, 10),
          ]
        ),
        new Equipement(
          1,
          'Cape du Coeur Saignant',
          200,
          'Cape',
          '../assets/capecoeursaignant.webp',
          [
            new Vitalite(351, 400),
            new Force(61, 80),
            new Sagesse(31, 40),
            new Tacle(5, 7),
            new Fuite(-5, -5),
            new DommagesTerre(11, 15),
            new DommagesNeutre(11, 15),
            new RetraitPM(4, 5),
            new DommagesCritiques(7, 10),
            new Critique(2, 3),
            new ResistanceTerre(7, 10),
            new ResistanceAir(7, 10)
          ]
        ),
        new Equipement(
          1,
          'Cape de la Dame du Hasard',
          200,
          'Cape',
          '../assets/capedameduhasard.webp',
          [
            new Vitalite(301, 350),
            new Intelligence(51, 70),
            new Chance(51, 70),
            new Sagesse(31, 40),
            new Fuite(4, 5),
            new DommagesFeu(7, 10),
            new DommagesEau(7, 10),
            new RetraitPM(4, 6),
            new DommagesCritiques(11, 15),
            new Critique(4, 6),
            new PO(1, 1),
            new ResistanceTerre(5, 7),
            new ResistanceEau(5, 7),
          ]
        ),
        new Equipement(
          1,
          'Cape au logis',
          198,
          'Cape',
          '../assets/capelogis.webp',
          [
            new Vitalite(301, 350),
            new Force(71, 100),
            new Critique(4, 6),
            new PM(1, 1),
            new DommagesNeutre(14, 18),
            new DommagesTerre(14, 18),
            new ResistanceFeu(7, 10),
            new ResistanceEau(5, 8),
            new ResistanceAir(4, 7)
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
