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
  PA,
  PO,
  Puissance,
  ResistanceAir,
  ResistanceEau,
  ResistanceFeu,
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
export class AmuletteHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipement(
          1,
          'Amulette Du Bouftou Royale',
          28,
          'Amulette',
          '../assets/amulettebouftouroyal.webp',
          [
            new Intelligence(16, 20),
            new Force(16, 20),
            new Critique(2, 3),
          ]
        ),
        new Equipement(
          1,
          'Amulette Du Coeur Saignant',
          200,
          'Amulette',
          '../assets/amulettecoeursaignant.webp',
          [
            new Vitalite(351, 400),
            new Force(61, 80),
            new Sagesse(31, 50),
            new Tacle(5, 7),
            new Fuite(-5, -5),
            new DommagesTerre(7, 10),
            new DommagesNeutre(7, 10),
            new RetraitPM(5, 7),
            new DommagesCritiques(11, 15),
            new Critique(4, 6),
            new PA(1, 1),
            new ResistanceFeu(7, 10)
          ]
        ),
        new Equipement(
          1,
          'Amulette De La Dame Du Hasard',
          200,
          'Amulette',
          '../assets/amulettedameduhasard.webp',
          [
            new Vitalite(301, 350),
            new Intelligence(41, 60),
            new Chance(41, 60),
            new Sagesse(31, 40),
            new Fuite(4, 6),
            new DommagesFeu(9, 12),
            new DommagesEau(9, 12),
            new RetraitPM(5, 7),
            new DommagesCritiques(16, 25),
            new PA(1, 1),
            new ResistanceAir(7, 10)
          ]
        ),
        new Equipement(
          1,
          'Amulette De Gein',
          200,
          'Amulette',
          '../assets/amulettegein.png',
          [
            new Vitalite(301, 350),
            new Force(51, 70),
            new Intelligence(51, 70),
            new Sagesse(31, 40),
            new Fuite(4, 6),
            new DommagesFeu(7, 10),
            new DommagesTerre(7, 10),
            new DommagesNeutre(7, 10),
            new DommagesCritiques(21, 25),
            new PO(1, 1),
            new PA(1, 1),
            new ResistanceEau(7, 10)
          ]
        ),
        new Equipement(
          1,
          'La meulette',
          143,
          'Amulette',
          '../assets/amulettemeulou.webp',
          [
            new Force(31, 50),
            new Puissance(6, 15),
            new Critique(2, 3),
            new PA(1, 1),
            new Sagesse(21, 30),
            new Vitalite(151, 200),
            new Dommages(2, 4),
            new ResistanceAir(6, 10),
            new ResistanceEau(6, 10)

          ]
        ),
        new Equipement(
          14094,
          'Amulette du strigide',
          200,
          'Amulette',
          '../assets/amulettestrigide.webp',
          [
            new Vitalite(351, 400),
            new Sagesse(31, 40),
            new Critique(4, 6),
            new Puissance(51, 70),
            new PA(1, 1),
            new Tacle(11, 15),
            new DommagesCritiques(16, 25),
            new ResistanceTerre(7, 10),
            new ResistanceAir(7, 10),
          ]
        ),
        new Equipement(
          1,
          'Amulette Volkorne',
          200,
          'Amulette',
          '../assets/amulettevolkorne.webp',
          [
            new Vitalite(301, 400),
            new Intelligence(81, 100),
            new Sagesse(31, 40),
            new DommagesFeu(16, 20),
            new DommagesCritiques(11, 15),
            new Critique(4, 5),
            new PA(1, 1),
            new ResistanceFeu(7, 10)
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
