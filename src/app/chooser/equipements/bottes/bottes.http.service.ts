import {Injectable} from '@angular/core'

import {
  Chance,
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
  Intelligence,
  PM,
  PO,
  Puissance,
  RetraitPM,
  Sagesse,
  Tacle,
  Vitalite
} from '../../../domain/Statistique'
import {Equipement} from '../../../domain/Equipement'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Injectable()
export class BottesHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipement(
          1,
          'Bottes Du Bouftou Royal',
          31,
          'Bottes',
          '../assets/bottesbouftouroyal.webp',
          [
            new Vitalite(
              41,
              60
            ),
            new Fuite(
              2,
              3
            ),
            new Dommages(
              3,
              4
            ),
          ]
        ),
        new Equipement(
          1,
          'Bottes Du Strigide',
          200,
          'Bottes',
          '../assets/bottesstrigide.webp',
          [
            new Vitalite(351, 400),
            new Sagesse(31, 50),
            new Puissance(51, 75),
            new PM(1, 1),
            new DommagesNeutre(9, 13),
            new DommagesTerre(9, 13),
            new DommagesFeu(9, 13),
            new DommagesEau(9, 13),
            new DommagesAir(9, 13),
          ]
        ),
        new Equipement(
          1,
          'Bottes Du Roi Joueur',
          200,
          'Bottes',
          '../assets/bottesroijoueur.webp',
          [
            new Vitalite(301, 350),
            new Force(41, 60),
            new Intelligence(41, 60),
            new Fuite(-5, -5),
            new DommagesFeu(11, 15),
            new DommagesNeutre(11, 15),
            new DommagesTerre(11, 15),
            new RetraitPM(4, 6),
            new Critique(4, 6),
            new PO(1, 1),
            new PM(1, 1),
            new Sagesse(31, 40),
          ]
        ),
        new Equipement(
          1,
          'Bottes Du Coeur Saignant',
          200,
          'Bottes',
          '../assets/bottescoeursaignant.jpeg',
          [
            new Vitalite(301, 350),
            new Force(71, 90),
            new Sagesse(31, 40),
            new Tacle(5, 7),
            new Fuite(-5, -5),
            new DommagesTerre(9, 12),
            new DommagesNeutre(9, 12),
            new RetraitPM(5, 7),
            new DommagesCritiques(9, 12),
            new Critique(3, 4),
            new PO(1, 1),
            new PM(1, 1),

          ]
        ),
        new Equipement(
          1,
          'Bottes De La Dame du Hasard',
          200,
          'Bottes',
          '../assets/bottesdameduhasard.webp',
          [
            new Vitalite(301, 350),
            new Intelligence(51, 70),
            new Chance(51, 70),
            new Sagesse(31, 40),
            new Fuite(4, 6),
            new DommagesFeu(11, 15),
            new DommagesEau(11, 15),
            new RetraitPM(4, 6),
            new DommagesCritiques(11, 15),
            new Critique(3, 4),
            new PM(1, 1)
          ]
        ),
        new Equipement(
          1,
          'Bottes Du Meulou',
          200,
          'Bottes',
          '../assets/bottesdameduhasard.webp',
          [
            new Force(31, 50),
            new PM(1, 1),
            new Sagesse(16, 30),
            new Vitalite(71, 120),
            new Critique(2, 3),
            new Puissance(4, 5),
          ]
        ),
        new Equipement(
          1,
          'Bottes Trithon',
          200,
          'Bottes',
          '../assets/bottestriton.webp',
          [
            new Vitalite(401, 500),
            new Sagesse(31, 40),
            new Tacle(7, 10),
            new DommagesCritiques(21, 25),
            new Critique(4, 6),
            new PO(1, 1),
            new PM(1, 1)
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
