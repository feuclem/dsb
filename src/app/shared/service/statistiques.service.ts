import {Injectable} from '@angular/core'
import {
  Agilite,
  ArmeDeChasse,
  Chance,
  Critique,
  Dommages,
  DommagesAir,
  DommagesAirArme,
  DommagesCritiques,
  DommagesDistance,
  DommagesEau,
  DommagesEauArme,
  DommagesFeu,
  DommagesFeuArme,
  DommagesMelee,
  DommagesNeutre,
  DommagesNeutreArme,
  DommagesTerre,
  Force,
  Fuite,
  Intelligence,
  PA,
  PM,
  PO,
  Pods,
  Puissance,
  ResistanceCritiques,
  ResistanceFactory,
  ResistanceFixeAir,
  ResistanceFixeEau,
  ResistanceFixeFeu,
  ResistanceFixeTerre,
  ResistanceFixNeutre,
  ResistancePoussees,
  RetraitPA,
  RetraitPM,
  Soins,
  Statistique,
  Tacle,
  Vitalite
} from '../entities/Statistique'
import {CharacteritiqueService} from './characteritique.service'

@Injectable()
export class StatistiquesService {

  constructor(private characteritiqueService: CharacteritiqueService) {
  }

  extractor(stat) {
    if (stat['(dommages Neutre)'] && stat['(dommages Neutre)']['from']) {
      return new DommagesNeutreArme(
        parseInt(stat['(dommages Neutre)']['from']),
        parseInt(stat['(dommages Neutre)']['to'] ? stat['(dommages Neutre)']['to'] : stat['(dommages Neutre)']['from'])
      )
    }
    if (stat['Dommages Neutre'] && stat['Dommages Neutre']['from']) {
      return new DommagesNeutre(
        parseInt(stat['Dommages Neutre']['from']),
        parseInt(stat['Dommages Neutre']['to'] ? stat['Dommages Neutre']['to'] : stat['Dommages Neutre']['from'])
      )
    }
    if (stat['Force'] && stat['Force']['from']) {
      return new Force(
        parseInt(stat['Force']['from']),
        parseInt(stat['Force']['to'] ? stat['Force']['to'] : stat['Force']['from'])
      )
    }
    if (stat['Intelligence'] && stat['Intelligence']['from']) {
      return new Intelligence(
        parseInt(stat['Intelligence']['from']),
        parseInt(stat['Intelligence']['to'] ? stat['Intelligence']['to'] : stat['Intelligence']['from'])
      )
    }
    if (stat['Chance'] && stat['Chance']['from']) {
      return new Chance(
        parseInt(stat['Chance']['from']),
        parseInt(stat['Chance']['to'] ? stat['Chance']['to'] : stat['Chance']['from'])
      )
    }
    if (stat['Agilité'] && stat['Agilité']['from']) {
      return new Agilite(
        parseInt(stat['Agilité']['from']),
        parseInt(stat['Agilité']['to'] ? stat['Agilité']['to'] : stat['Agilité']['from'])
      )
    }
    if (stat['Vitalité'] && stat['Vitalité']['from']) {
      return new Vitalite(
        parseInt(stat['Vitalité']['from']),
        parseInt(stat['Vitalité']['to'] ? stat['Vitalité']['to'] : stat['Vitalité']['from'])
      )
    }
    if (stat['Sagesse'] && stat['Sagesse']['from']) {
      return new Vitalite(
        parseInt(stat['Sagesse']['from']),
        parseInt(stat['Sagesse']['to'] ? stat['Sagesse']['to'] : stat['Sagesse']['from'])
      )
    }
    if (stat['Dommages'] && stat['Dommages']['from']) {
      return new Dommages(
        parseInt(stat['Dommages']['from']),
        parseInt(stat['Dommages']['to'] ? stat['Dommages']['to'] : stat['Dommages']['from'])
      )
    }
    if (stat['Puissance'] && stat['Puissance']['from']) {
      return new Puissance(
        parseInt(stat['Puissance']['from']),
        parseInt(stat['Puissance']['to'] ? stat['Puissance']['to'] : stat['Puissance']['from'])
      )
    }
    if (stat['Dommages Terre'] && stat['Dommages Terre']['from']) {
      return new DommagesTerre(
        parseInt(stat['Dommages Terre']['from']),
        parseInt(stat['Dommages Terre']['to'] ? stat['Dommages Terre']['to'] : stat['Dommages Terre']['from'])
      )
    }
    if (stat['(dommages Terre)'] && stat['(dommages Terre)']['from']) {
      return new DommagesTerre(
        parseInt(stat['(dommages Terre)']['from']),
        parseInt(stat['(dommages Terre)']['to'] ? stat['(dommages Terre)']['to'] : stat['(dommages Terre)']['from'])
      )
    }
    if (stat['Dommages Feu'] && stat['Dommages Feu']['from']) {
      return new DommagesFeu(
        parseInt(stat['Dommages Feu']['from']),
        parseInt(stat['Dommages Feu']['to'] ? stat['Dommages Feu']['to'] : stat['Dommages Feu']['from'])
      )
    }
    if (stat['(dommages Feu)'] && stat['(dommages Feu)']['from']) {
      return new DommagesFeuArme(
        parseInt(stat['(dommages Feu)']['from']),
        parseInt(stat['(dommages Feu)']['to'] ? stat['(dommages Feu)']['to'] : stat['(dommages Feu)']['from'])
      )
    }
    if (stat['Dommages Eau'] && stat['Dommages Eau']['from']) {
      return new DommagesEau(
        parseInt(stat['Dommages Eau']['from']),
        parseInt(stat['Dommages Eau']['to'] ? stat['Dommages Eau']['to'] : stat['Dommages Eau']['from'])
      )
    }
    if (stat['(dommages Eau)'] && stat['(dommages Eau)']['from']) {
      return new DommagesEauArme(
        parseInt(stat['(dommages Eau)']['from']),
        parseInt(stat['(dommages Eau)']['to'] ? stat['(dommages Eau)']['to'] : stat['(dommages Eau)']['from'])
      )
    }
    if (stat['Dommages Air'] && stat['Dommages Air']['from']) {
      return new DommagesAir(
        parseInt(stat['Dommages Air']['from']),
        parseInt(stat['Dommages Air']['to'] ? stat['Dommages Air']['to'] : stat['Dommages Air']['from'])
      )
    }
    if (stat['(dommages Air)'] && stat['(dommages Air)']['from']) {
      return new DommagesAirArme(
        parseInt(stat['(dommages Air)']['from']),
        parseInt(stat['(dommages Air)']['to'] ? stat['(dommages Air)']['to'] : stat['(dommages Air)']['from'])
      )
    }
    if (stat['Fuite'] && stat['Fuite']['from']) {
      return new Fuite(
        parseInt(stat['Fuite']['from']),
        parseInt(stat['Fuite']['to'] ? stat['Fuite']['to'] : stat['Fuite']['from'])
      )
    }
    if (stat['Tacle'] && stat['Tacle']['from']) {
      return new Tacle(
        parseInt(stat['Tacle']['from']),
        parseInt(stat['Tacle']['to'] ? stat['Tacle']['to'] : stat['Tacle']['from'])
      )
    }
    if (stat['Portée'] && stat['Portée']['from']) {
      return new PO(
        parseInt(stat['Portée']['from']),
        parseInt(stat['Portée']['to'] ? stat['Portée']['to'] : stat['Portée']['from'])
      )
    }
    if (stat['PM'] && stat['PM']['from']) {
      return new PM(
        parseInt(stat['PM']['from']),
        parseInt(stat['PM']['to'] ? stat['PM']['to'] : stat['PM']['from'])
      )
    }
    if (stat['PA'] && stat['PA']['from']) {
      return new PA(
        parseInt(stat['PA']['from']),
        parseInt(stat['PA']['to'] ? stat['PA']['to'] : stat['PA']['from'])
      )
    }
    if (stat['Retrait PM'] && stat['Retrait PM']['from']) {
      return new RetraitPM(
        parseInt(stat['Retrait PM']['from']),
        parseInt(stat['Retrait PM']['to'] ? stat['Retrait PM']['to'] : stat['Retrait PM']['from'])
      )
    }
    if (stat['Retrait PA'] && stat['Retrait PA']['from']) {
      return new RetraitPA(
        parseInt(stat['Retrait PA']['from']),
        parseInt(stat['Retrait PA']['to'] ? stat['Retrait PA']['to'] : stat['Retrait PA']['from'])
      )
    }
    if (stat['Résistance Neutre'] && stat['Résistance Neutre']['from']) {
      return new ResistanceFixNeutre(
        parseInt(stat['Résistance Neutre']['from']),
        parseInt(stat['Résistance Neutre']['to'] ? stat['Résistance Neutre']['to'] : stat['Résistance Neutre']['from'])
      )
    }
    if (stat['Résistance Terre'] && stat['Résistance Terre']['from']) {
      return new ResistanceFixeTerre(
        parseInt(stat['Résistance Terre']['from']),
        parseInt(stat['Résistance Terre']['to'] ? stat['Résistance Terre']['to'] : stat['Résistance Terre']['from'])
      )
    }
    if (stat['Résistance Feu'] && stat['Résistance Feu']['from']) {
      return new ResistanceFixeFeu(
        parseInt(stat['Résistance Feu']['from']),
        parseInt(stat['Résistance Feu']['to'] ? stat['Résistance Feu']['to'] : stat['Résistance Feu']['from'])
      )
    }
    if (stat['Résistance Eau'] && stat['Résistance Eau']['from']) {
      return new ResistanceFixeEau(
        parseInt(stat['Résistance Eau']['from']),
        parseInt(stat['Résistance Eau']['to'] ? stat['Résistance Eau']['to'] : stat['Résistance Eau']['from'])
      )
    }
    if (stat['Résistance Air'] && stat['Résistance Air']['from']) {
      return new ResistanceFixeAir(
        parseInt(stat['Résistance Air']['from']),
        parseInt(stat['Résistance Air']['to'] ? stat['Résistance Air']['to'] : stat['Résistance Air']['from'])
      )
    }
    if (stat['Résistance Critiques'] && stat['Résistance Critiques']['from']) {
      return new ResistanceCritiques(
        parseInt(stat['Résistance Critiques']['from']),
        parseInt(stat['Résistance Critiques']['to'] ? stat['Résistance Critiques']['to'] : stat['Résistance Critiques']['from'])
      )
    }
    if (stat['Résistance Poussée'] && stat['Résistance Poussée']['from']) {
      return new ResistancePoussees(
        parseInt(stat['Résistance Poussée']['from']),
        parseInt(stat['Résistance Poussée']['to'] ? stat['Résistance Poussée']['to'] : stat['Résistance Poussée']['from'])
      )
    }
    if (stat['Soins'] && stat['Soins']['from']) {
      return new Soins(
        parseInt(stat['Soins']['from']),
        parseInt(stat['Soins']['to'] ? stat['Soins']['to'] : stat['Soins']['from'])
      )
    }
    if (stat['Pods'] && stat['Pods']['from']) {
      return new Pods(
        parseInt(stat['Pods']['from']),
        parseInt(stat['Pods']['to'] ? stat['Pods']['to'] : stat['Pods']['from'])
      )
    }
    if (stat['Dommages Critiques'] && stat['Dommages Critiques']['from']) {
      return new DommagesCritiques(
        parseInt(stat['Dommages Critiques']['from']),
        parseInt(stat['Dommages Critiques']['to'] ? stat['Dommages Critiques']['to'] : stat['Dommages Critiques']['from'])
      )
    }
    if (stat['% Dommages Distance'] && stat['% Dommages Distance']['from']) {
      return new DommagesDistance(
        parseInt(stat['% Dommages Distance']['from']),
        parseInt(stat['% Dommages Distance']['to'] ? stat['% Dommages Distance']['to'] : stat['% Dommages Distance']['from'])
      )
    }
    if (stat['% Dommages Melee'] && stat['% Dommages Melee']['from']) {
      return new DommagesMelee(
        parseInt(stat['% Dommages Melee']['from']),
        parseInt(stat['% Dommages Melee']['to'] ? stat['% Dommages Melee']['to'] : stat['% Dommages Melee']['from'])
      )
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

  setStatInStuff(stat: Statistique) {
    if (stat.label === 'Force') {
      this.characteritiqueService.force = stat.to
    }
    if (stat.label === 'Intelligence') {
      this.characteritiqueService.intelligence = stat.to
    }
    if (stat.label === 'Chance') {
      this.characteritiqueService.chance = stat.to
    }
    if (stat.label === 'Agilite') {
      this.characteritiqueService.agilite = stat.to
    }
    if (stat.label === 'Vitalité') {
      this.characteritiqueService.vitalite = stat.to
    }
    if (stat.label === 'Puissance') {
      this.characteritiqueService.puissance = stat.to
    }
    if (stat.label === 'Dommages') {
      this.characteritiqueService.dommages = stat.to
    }
    if (stat.label === 'DommagesTerre') {
      this.characteritiqueService.dommagesTerre = stat.to
    }
    if (stat.label === 'DommagesFeu') {
      this.characteritiqueService.dommagesFeu = stat.to
    }
    if (stat.label === 'DommagesEau') {
      this.characteritiqueService.dommagesEau = stat.to
    }
    if (stat.label === 'DommagesAir') {
      this.characteritiqueService.dommagesAir = stat.to
    }
    if (stat.label === 'DommagesCritiques') {
      this.characteritiqueService.dommagesCritique = stat.to
    }
    if (stat.label === 'DommagesMelee') {
      this.characteritiqueService.dommagesMelee = stat.to
    }
    if (stat.label === 'DommagesDistance') {
      this.characteritiqueService.dommagesDistance = stat.to
    }
    if (stat.label === 'DommagesAuxSorts') {
      this.characteritiqueService.dommagesAuxSorts = stat.to
    }
    if (stat.label === 'ResistanceTerre') {
      this.characteritiqueService.resistanceTerre = stat.to
    }
    if (stat.label === 'ResistanceFeu') {
      this.characteritiqueService.resistanceFeu = stat.to
    }
    if (stat.label === 'ResistanceEau') {
      this.characteritiqueService.resistanceEau = stat.to
    }
    if (stat.label === 'ResistanceAir') {
      this.characteritiqueService.resistanceAir = stat.to
    }
    if (stat.label === 'ResistanceFixeTerre') {
      this.characteritiqueService.resistanceFixeTerre = stat.to
    }
    if (stat.label === 'ResistanceFixeFeu') {
      this.characteritiqueService.resistanceFixeFeu = stat.to
    }
    if (stat.label === 'ResistanceFixeEau') {
      this.characteritiqueService.resistanceFixeEau = stat.to
    }
    if (stat.label === 'ResistanceFixeAir') {
      this.characteritiqueService.resistanceFixeAir = stat.to
    }
  }
}
