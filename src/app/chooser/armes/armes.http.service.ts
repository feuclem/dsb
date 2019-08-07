import {Injectable} from '@angular/core'
import {Arme} from '../../../domain/Arme'
import {DommagesAirArme, DommagesEauArme, DommagesFeuArme, DommagesTerreArme, Puissance, Tacle, Vitalite} from '../../../domain/Statistique'
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
          '../assets/6030.webp',
          [
            new DommagesTerreArme(
              4,
              8
            ),
            new DommagesFeuArme(
              4,
              8
            ),
            new DommagesEauArme(
              4,
              8
            ),
            new DommagesAirArme(
              4,
              8
            ),
            new Vitalite(
              31,
              40
            ),
            new Puissance(
              21,
              30
            ),
            new Tacle(
              2,
              3
            ),
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
