import {Injectable} from '@angular/core'
import {ArmeDeChasse, Statistique} from '../entities/Statistique'
import {CharacteristiqueService} from './characteristique.service'
import {mapperForStatInStuff, mapperStat} from './statistiques.service.constant'

@Injectable()
export class StatistiquesService {

  constructor(private characteritiqueService: CharacteristiqueService) {
  }

  extractor(stat) {
    // tslint:disable-next-line:forin
    for (const key in stat) {
      const occurrence = mapperStat.filter(item => item.label === key)
      if (occurrence && occurrence[0] !== undefined) {
        return new occurrence[0].type(
          parseInt(stat[key]['from']),
          parseInt(stat[key]['to'] ? stat[key]['to'] : stat[key]['from'])
        )
      }
    }

    if (stat['Arme de chasse']) {
      return new ArmeDeChasse()
    }
  }

  setStatInStuff(stat: Statistique) {
    const occurrence = mapperForStatInStuff.filter(item => item.label === stat.label)
    if (occurrence.length > 0) {
      if (stat.label === 'Force') {
        this.characteritiqueService.updateForce(stat.to)
      } else if (stat.label === 'Intelligence') {
        this.characteritiqueService.updateIntelligence(stat.to)
      } else if (stat.label === 'Chance') {
        this.characteritiqueService.updateChance(stat.to)
      } else if (stat.label === 'Agilité') {
        this.characteritiqueService.updateAgilite(stat.to)
      } else if (stat.label === 'Vitalité') {
        this.characteritiqueService.updateVitalite(stat.to)
      } else {
        this.characteritiqueService[occurrence[0].type] = stat.to
      }
    }
  }
}
