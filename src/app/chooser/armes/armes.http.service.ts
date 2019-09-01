import {Injectable} from '@angular/core'
import {Arme} from '../../shared/entities/Arme'
import {environment} from '../../../environments/environment'
import {StatistiquesService} from '../../shared/service/statistiques.service'
import {mockedArmes} from './armes.http.service.constants'

@Injectable()
export class ArmesHttpService {

  constructor(private statistiquesService: StatistiquesService) {}

  getAllArmes(): Promise<Arme[]> {
    if (environment.mock) {
      return Promise.resolve(mockedArmes)
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
            environment.staticUrl + '/armes/' + item.name.replace(/ /g, '') + '.png',
            item.stats.map(stat => this.statistiquesService.extractor(stat))
          )
        ))
        return armes
      })
  }
}
