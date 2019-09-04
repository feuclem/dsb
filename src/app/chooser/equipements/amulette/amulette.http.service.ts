import {Injectable} from '@angular/core'
import {Equipement} from '../../../shared/entities/Equipement'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {mockedAmulettes} from './amulette.http.service.constants'

@Injectable()
export class AmuletteHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
    if (environment.mock) {
      return Promise.resolve(mockedAmulettes)
    } else {
      const armes: Equipement[] = []
      return fetch(environment.apiUrl + 'amulettes/all?page=1')
        .then(r => r.json())
        .then(json => {
          json.map(item => armes.push(
            new Equipement(
              item._id,
              item.name,
              parseInt(item.lvl),
              item.type,
              environment.staticUrl + 'amulettes/' + item.name.replace(/ /g, '') + '.png',
              item.stats.map(stat => this.statistiquesService.extractor(stat))
            )
          ))
          return armes
        })
    }
  }
}
