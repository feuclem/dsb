import {Injectable} from '@angular/core'
import {Arme} from '../../domain/Arme'
import {
  Chance,
  Critique,
  DommagesAirArme, DommagesEau,
  DommagesEauArme, DommagesFeu,
  DommagesFeuArme, DommagesNeutre, DommagesNeutreArme, DommagesTerre,
  DommagesTerreArme,
  Force, Fuite, Intelligence, PO,
  Puissance, RetraitPM, Sagesse,
  Tacle,
  Vitalite
} from '../../domain/Statistique'
import {environment} from '../../../environments/environment'
import {StatistiquesService} from '../../shared/statistiques.service'

@Injectable()
export class ArmesHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllArmes(): Promise<Arme[]> {
    if (environment.mock) {
      return Promise.resolve([
        new Arme(
          1,
          'Epée Royale Du Bouftou',
          30,
          'Épée',
          '../assets/epeebouftouroyal.webp',
          [
            new DommagesTerreArme(4, 8),
            new DommagesFeuArme(4, 8),
            new DommagesEauArme(4, 8),
            new DommagesAirArme(4, 8),
            new Vitalite(31, 40),
            new Puissance(21, 30),
            new Tacle(2, 3),
          ]
        ),
        new Arme(
          1,
          'Arc du chaloeil',
          200,
          'Arc',
          '../assets/arcchaloeil.webp',
          [
            new DommagesTerreArme(20, 25),
            new DommagesNeutre(16, 20),
            new Vitalite(351, 400),
            new Force(61, 80),
            new Sagesse(31, 40),
            new Tacle(-30, -30),
            new DommagesTerre(11, 15),
            new DommagesNeutre(11, 15),
            new Critique(4, 6),
            new PO(1, 1)
          ]
        ),
        new Arme(
          1,
          'Arc nécrotique',
          200,
          'Arc',
          '../assets/arcnecro.webp',
          [
            new DommagesFeuArme(21, 25),
            new DommagesEauArme(6, 10),
            new DommagesEauArme(6, 10),
            new Vitalite(301, 350),
            new Intelligence(41, 60),
            new Chance(41, 60),
            new Sagesse(31, 40),
            new DommagesFeu(11, 15),
            new DommagesEau(11, 15),
            new Critique(2, 3),
            new PO(-1, -1)
          ]
        ),
        new Arme(
          1,
          'Marteau R\'ture',
          200,
          'Arc',
          '../assets/martorture.webp',
          [
            new DommagesNeutreArme(52, 60),
            new Vitalite(301, 400),
            new Force(61, 80),
            new Sagesse(31, 40),
            new Fuite(9, 12),
            new DommagesTerre(16, 20),
            new DommagesNeutre(16, 20),
            new RetraitPM(7, 10),
            new Critique(3, 4)
          ]
        )
      ])
    }
    const armes: Arme[] = []
    return fetch('https://dofapi2.herokuapp.com/weapons?filter[offset]=0&filter[limit]=2&filter[skip]=0')
      .then(r => r.json())
      .then(json => {
        json.map(item => armes.push(
          new Arme(
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
