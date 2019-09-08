import {Injectable} from '@angular/core'
import {ArmeDeChasse, Critique, ResistanceFactory, Statistique} from '../entities/Statistique'
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
      return this.characteritiqueService[occurrence[0].type] = stat.to
    }
  }

  private getStatElement(key) {
    if (/Neutre/.test(key)) {
      return 'Neutre'
    } else if (/Terre/.test(key)) {
      return 'Terre'
    } else if (/Feu/.test(key)) {
      return 'Feu'
    } else if (/Eau/.test(key)) {
      return 'Eau'
    } else if (/Air/.test(key)) {
      return 'Air'
    }
  }
}
