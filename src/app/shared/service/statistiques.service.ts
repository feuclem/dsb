import {Injectable} from '@angular/core'
import {ArmeDeChasse, Critique, ResistanceFactory, Statistique} from '../entities/Statistique'
import {CharacteritiqueService} from './characteritique.service'
import {mapperForStatInStuff, mapperStat} from './statistiques.service.constant'

@Injectable()
export class StatistiquesService {

  constructor(private characteritiqueService: CharacteritiqueService) {
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
    // tslint:disable-next-line:forin
    for (const key in stat) {
      const regexpCritique = new RegExp(`% Critique$`)
      const regexpCritiquePourcentFixe = new RegExp(`^[0-9]*% Critique$`)

      if (regexpCritique.test(key)) {
        if (regexpCritiquePourcentFixe.test(key)) {
          const pourcentCritiqueFixe = key.split('%')
          if (stat[pourcentCritiqueFixe[0] + '% Critique'] && stat[pourcentCritiqueFixe[0] + '% Critique']['from']) {
            return new Critique(
              parseInt(stat[pourcentCritiqueFixe[0] + '% Critique']['from']),
              parseInt(stat[pourcentCritiqueFixe[0] + '% Critique']['to'] ?
                stat[pourcentCritiqueFixe[0] + '% Critique']['to'] :
                stat[pourcentCritiqueFixe[0] + '% Critique']['from'])
            )
          }
        }
        if (stat['% Critique'] && stat['% Critique']['from']) {
          return new Critique(
            parseInt(stat['% Critique']['from']),
            parseInt(stat['% Critique']['to'] ? stat['% Critique']['to'] : stat['% Critique']['from'])
          )
        }
      }

      const statElement = this.getStatElement(key)
      const regexpResistance = new RegExp(`% Résistance ${statElement}$`)
      const regexpResistancePourcentFixe = new RegExp(`^[0-9]*% Résistance ${statElement}$`)

      if (regexpResistance.test(key)) {
        if (regexpResistancePourcentFixe.test(key)) {
          const pourcentResistanceFixe = key.split('%')
          if (
            stat[pourcentResistanceFixe[0] + '% Résistance '
            + statElement] && stat[pourcentResistanceFixe[0] + '% Résistance ' + statElement]['from']) {
            return ResistanceFactory(
              statElement,
              parseInt(stat[pourcentResistanceFixe[0] + '% Résistance ' + statElement]['from']),
              parseInt(stat[pourcentResistanceFixe[0] + '% Résistance ' + statElement]['to'] ?
                stat[pourcentResistanceFixe[0] + '% Résistance ' + statElement]['to'] :
                stat[pourcentResistanceFixe[0] + '% Résistance ' + statElement]['from'])
            )

          }
        }
        if (stat['% Résistance ' + statElement] && stat['% Résistance ' + statElement]['from']) {
          return ResistanceFactory(
            statElement,
            parseInt(stat['% Résistance ' + statElement]['from']),
            parseInt(stat['% Résistance ' + statElement]['to'] ?
              stat['% Résistance ' + statElement]['to'] :
              stat['% Résistance ' + statElement]['from'])
          )

        }
      }
    }

    if (stat['Arme de chasse']) {
      return new ArmeDeChasse()
    }
  }

  setStatInStuff(stat: Statistique) {
    const occurrence = mapperForStatInStuff.filter(item => item.label === stat.label)
    if (occurrence) {
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
