import {Injectable} from '@angular/core'

import {
  Agilite, Chance,
  Critique,
  Dommages,
  DommagesCritiques, DommagesEau, DommagesFeu,
  DommagesNeutre,
  DommagesTerre,
  Force, Fuite, Intelligence,
  PO, RetraitPM,
  Sagesse, Soins,
  Tacle,
  Vitalite
} from '../../../domain/Statistique'
import {Equipement} from '../../../domain/Equipement'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/statistiques.service'

@Injectable()
export class AnneauHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Equipement(
          1,
          'Anneau Du Bouftou Royal',
          31,
          'Anneau',
          '../assets/anneaubouftouroyal.webp',
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
        ),
        new Equipement(
          1,
          'Anneau Crustique',
          200,
          'Anneau',
          '../assets/anneaucrustique.webp',
          [
            new Vitalite(301, 350),
            new Force(61, 80),
            new Sagesse(31, 40),
            new Tacle(7, 10),
            new DommagesTerre(9, 12),
            new DommagesNeutre(9, 12),
            new Critique(2, 2)
          ]
        ),
        new Equipement(
          1,
          'Anneau du Meulou',
          126,
          'Anneau',
          '../assets/anneaumeulou.webp',
          [
            new Force(26, 40),
            new Agilite(21, 30),
            new Vitalite(71, 100),
            new Dommages(4, 5),
            new PO(1, 1)
          ]
        ),
        new Equipement(
          1,
          'Bague trithon',
          200,
          'Anneau',
          '../assets/anneautriton.webp',
          [
            new Vitalite(301, 400),
            new Sagesse(31, 40),
            new Tacle(7, 10),
            new DommagesCritiques(16, 20)
          ]
        ),
        new Equipement(
          1,
          'Bague volkorne',
          200,
          'Anneau',
          '../assets/anneauvolkorne.webp',
          [
            new Vitalite(201, 250),
            new Chance(81, 100),
            new DommagesEau(16, 20),
            new Critique(4, 5)
          ]
        ),
        new Equipement(
          1,
          'Bague gloursonne',
          197,
          'Anneau',
          '../assets/baguegloursonne.jpeg',
          [
            new Vitalite(201, 250),
            new Force(41, 60),
            new Intelligence(41, 60),
            new Sagesse(31, 40),
            new Critique(3, 4),
            new Soins(6, 8),
            new DommagesNeutre(8, 12),
            new DommagesTerre(8, 12),
            new DommagesFeu(8, 12),
            new Tacle(4, 5),
          ]
        ),
        new Equipement(
          1,
          'Chavalière roi joueur',
          200,
          'Anneau',
          '../assets/bagueroijoueur.jpeg',
          [
            new Vitalite(201, 250),
            new Force(31, 50),
            new Intelligence(31, 50),
            new Sagesse(31, 40),
            new Fuite(-5, -5),
            new DommagesFeu(9, 12),
            new DommagesTerre(9, 12),
            new DommagesNeutre(9, 12),
            new RetraitPM(4, 6),
            new Critique(2, 3),
            new PO(1, 1)
          ]
        ),
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
