import {Injectable} from '@angular/core'
import {Arme} from '../../shared/entities/Arme'
import {environment} from '../../../environments/environment'
import {StatistiquesService} from '../../shared/service/statistiques.service'

@Injectable()
export class ArmesHttpService {

  constructor(private statistiquesService: StatistiquesService) {}

  getAllArmes(): Promise<Arme[]> {
    const armes: Arme[] = []
    return fetch(environment.apiUrl + 'armes/all?page=1')
      .then(r => r.json())
      .then(json => {
        json.map(item => armes.push(
          new Arme(
            item._id,
            item.name,
            parseInt(item.lvl),
            item.type,
            environment.staticUrl + '/armes/' + item.name.replace(/ /g, '') + '.png',
            item.stats.filter(value => Object.keys(value).length !== 0).map(stat => this.statistiquesService.extractor(stat))
          )
        ))
        return armes
      })
  }
}
