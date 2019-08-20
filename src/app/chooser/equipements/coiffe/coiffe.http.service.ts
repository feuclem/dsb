import {Injectable} from '@angular/core'

import {
  Agilite,
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
import {StatistiquesService} from '../../../shared/statistiques.service'

@Injectable()
export class CoiffeHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipement(
          1,
          'Coiffe Du Bouftou Royal',
          32,
          'Coiffe',
          '../assets/coiffebouftouroyal.webp',
          [
            new Force(
              21,
              30
            ),
            new Intelligence(
              21,
              30
            ),
          ]
        ),
        new Equipement(
          1,
          'Chapeau de Gein',
          200,
          'Coiffe',
          '../assets/coiffegein.webp',
          [
            new Vitalite(301, 350),
            new Force(51, 70),
            new Intelligence(51, 70),
            new Sagesse(31, 40),
            new DommagesFeu(11, 15),
            new DommagesTerre(11, 15),
            new DommagesNeutre(11, 15),
            new Critique(2, 3),
            new Fuite(7, 10),
            new ResistanceNeutre(5, 7),
            new ResistanceTerre(7, 10),
          ]
        ),
        new Equipement(
          17574,
          'Couronne du Roi Joueur',
          200,
          'Coiffe',
          '../assets/coifferoijoueur.webp',
          [
            new Vitalite(301, 350),
            new Force(61, 80),
            new Intelligence(61, 80),
            new Fuite(-5, -5),
            new DommagesFeu(9, 12),
            new DommagesNeutre(9, 12),
            new RetraitPM(4, 6),
            new PO(1, 1),
            new Sagesse(31, 50),
            new DommagesTerre(9, 12),
            new ResistanceAir(7, 10)
          ]
        ),
        new Equipement(
          1,
          'Coiffe du meulou',
          141,
          'Coiffe',
          '../assets/coiffemeulou.webp',
          [
            new Force(31, 55),
            new Puissance(11, 20),
            new Dommages(6, 10),
            new Vitalite(201, 270),
            new Sagesse(21, 40),
            new Critique(3, 4),
            new Intelligence(16, 25),
            new Agilite(16, 25),
            new ResistanceNeutre(5, 7)
          ]
        ),
        new Equipement(
          1,
          'Masque du trithon',
          200,
          'Coiffe',
          '../assets/masquetriton.png',
          [
            new Vitalite(301, 400),
            new Sagesse(31, 40),
            new Tacle(7, 10),
            new DommagesCritiques(21, 25),
            new Critique(3, 4),
            new ResistanceFeu(7, 10)
          ]
        ),
        new Equipement(
          1,
          'Masque de koutoulou',
          200,
          'Coiffe',
          '../assets/masquekoutoulou.webp',
          [
            new Vitalite(301, 350),
            new Force(51, 70),
            new Sagesse(21, 30),
            new DommagesTerre(9, 12),
            new DommagesNeutre(9, 12),
            new Critique(2, 2),
            new PA(1, 1),
            new ResistanceFeu(7, 10),
            new ResistanceAir(7, 10),
          ]
        ),
        new Equipement(
          1,
          'Kidibonnet',
          200,
          'Coiffe',
          '../assets/kidibonnet.webp',
          [
            new Vitalite(351, 400),
            new Chance(41, 50),
            new Puissance(11, 15),
            new Tacle(11, 15),
            new DommagesEau(11, 15),
            new Critique(3, 4),
            new PA(1, 1),
            new Sagesse(31, 40),
            new ResistanceNeutre(5, 7),
            new ResistanceFeu(5, 7)
          ]
        ),
        new Equipement(
          1,
          'Heaume oplate',
          200,
          'Coiffe',
          '../assets/heaumeoplate.png',
          [
            new Vitalite(301, 350),
            new Intelligence(61, 80),
            new Sagesse(31, 40),
            new Fuite(-10, -10),
            new DommagesFeu(11, 15),
            new Critique(3, 4),
            new PO(1, 1),
            new PA(1, 1),
            new ResistanceNeutre(5, 7),
            new ResistanceAir(5, 7)
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
