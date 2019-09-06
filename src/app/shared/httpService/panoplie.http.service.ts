import {Injectable} from '@angular/core'
import {environment} from '../../../environments/environment'
import {StatistiquesService} from '../service/statistiques.service'
import {Panoplie} from '../entities/Panoplie'
import {Bonus} from '../entities/Bonus'

@Injectable()
export class PanoplieHttpService {

  constructor(private statistiquesService: StatistiquesService) {
  }

  getAllPanoplie(): Promise<Panoplie[]> {
    const panoplies: Panoplie[] = []
    return fetch(environment.apiUrl + 'panoplies/all?page=1')
      .then(r => r.json())
      .then(json => {
        json.map(item => panoplies.push(
          new Panoplie(
            item._id,
            item.name,
            parseInt(item.lvl),
            item.type,
            environment.staticUrl + 'panoplies/' + item.name.replace(/ /g, '') + '.png',
            item.bonus.map(bonus => {
                return new Bonus(
                  bonus.number,
                  bonus.stats.map(stat => this.statistiquesService.extractor(stat))
                )
              }
            ),
            item.equipment_id.map(id => parseInt(id))
          )))
        return panoplies
      })
  }
}
