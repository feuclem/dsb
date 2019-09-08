import {Injectable} from '@angular/core'
import {Equipement} from '../../../shared/entities/Equipement'
import {environment} from '../../../../environments/environment'
import {StatistiquesService} from '../../../shared/service/statistiques.service'

@Injectable()
export class AmuletteHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllEquipements(): Promise<Equipement[]> {
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
            item.stats.filter(value => Object.keys(value).length !== 0).map(stat => this.statistiquesService.extractor(stat))
          )
        ))
        return armes
      })
  }
}
