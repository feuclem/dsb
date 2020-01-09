import {Injectable} from '@angular/core'
import {StatistiquesService} from '../service/statistiques.service'
import {Equipement} from '../entities/Equipement'
import {environment} from '../../../environments/environment'

@Injectable()
export class EquipementsHttpService {

  type: String

  constructor(private statistiquesService: StatistiquesService) {}

  getTypeEquipements(page: number): Promise<Equipement[]> {
    const equipements: Equipement[] = []
    return fetch(environment.apiUrl + this.type + '/all?page=' + page)
      .then(r => r.json())
      .then(json => {
        json.map(item => equipements.push(
          new Equipement(
            item._id,
            item.name,
            parseInt(item.lvl),
            item.type,
            environment.staticUrl + this.type + '/' + item.name.replace(/ /g, '') + '.png',
            item.stats.filter(value => Object.keys(value).length !== 0).map(stat => this.statistiquesService.extractor(stat)),
            item.setId
          )
        ))
        return equipements
      })
  }

  getTotalTypeEquipements(): Promise<number> {
    return fetch(environment.apiUrl + this.type + '/total')
      .then(r => r.json())
  }

}
