import {Injectable} from '@angular/core'
import {Sorts} from '../shared/entities/Sorts'
import {CharacteritiqueService} from '../shared/characteritique.service'

@Injectable()
export class DamageCalculatorService {

  constructor(private characteritiqueService: CharacteritiqueService) {
  }

  calculDegatBase(degat: number, type: string): number {
    if (type === 'terre') {
      return Sorts.calcul(
        degat,
        this.characteritiqueService.puissance,
        this.characteritiqueService.force,
        this.characteritiqueService.dommages,
        this.characteritiqueService.dommagesTerre,
        0,
        this.characteritiqueService.dommagesMelee,
        this.characteritiqueService.dommagesDistance,
        this.characteritiqueService.dommagesAuxSorts
      )
    }
    if (type === 'feu') {
      return Sorts.calcul(
        degat,
        this.characteritiqueService.puissance,
        this.characteritiqueService.intelligence,
        this.characteritiqueService.dommages,
        this.characteritiqueService.dommagesFeu,
        0,
        this.characteritiqueService.dommagesMelee,
        this.characteritiqueService.dommagesDistance,
        this.characteritiqueService.dommagesAuxSorts
      )
    }
    if (type === 'eau') {
      return Sorts.calcul(
        degat,
        this.characteritiqueService.puissance,
        this.characteritiqueService.chance,
        this.characteritiqueService.dommages,
        this.characteritiqueService.dommagesEau,
        0,
        this.characteritiqueService.dommagesMelee,
        this.characteritiqueService.dommagesDistance,
        this.characteritiqueService.dommagesAuxSorts
      )
    }
    if (type === 'air') {
      return Sorts.calcul(
        degat,
        this.characteritiqueService.puissance,
        this.characteritiqueService.agilite,
        this.characteritiqueService.dommages,
        this.characteritiqueService.dommagesAir,
        0,
        this.characteritiqueService.dommagesMelee,
        this.characteritiqueService.dommagesDistance,
        this.characteritiqueService.dommagesAuxSorts
      )
    }
    if (type === 'air-feu') {
      return Sorts.calcul(
        degat,
        this.characteritiqueService.puissance,
        this.characteritiqueService.agilite + this.characteritiqueService.intelligence,
        this.characteritiqueService.dommages,
        this.characteritiqueService.dommagesAir + this.characteritiqueService.dommagesFeu,
        0,
        this.characteritiqueService.dommagesMelee,
        this.characteritiqueService.dommagesDistance,
        this.characteritiqueService.dommagesAuxSorts
      )
    }
  }

  calculDegatCritique(degat: number, type: string): number {
    if (type === 'terre') {
      return Sorts.calcul(
        degat,
        this.characteritiqueService.puissance,
        this.characteritiqueService.force,
        this.characteritiqueService.dommages,
        this.characteritiqueService.dommagesTerre,
        this.characteritiqueService.dommagesCritique,
        this.characteritiqueService.dommagesMelee,
        this.characteritiqueService.dommagesDistance,
        this.characteritiqueService.dommagesAuxSorts
      )
    }
    if (type === 'feu') {
      return Sorts.calcul(
        degat,
        this.characteritiqueService.puissance,
        this.characteritiqueService.intelligence,
        this.characteritiqueService.dommages,
        this.characteritiqueService.dommagesFeu,
        this.characteritiqueService.dommagesCritique,
        this.characteritiqueService.dommagesMelee,
        this.characteritiqueService.dommagesDistance,
        this.characteritiqueService.dommagesAuxSorts
      )
    }
    if (type === 'eau') {
      return Sorts.calcul(
        degat,
        this.characteritiqueService.puissance,
        this.characteritiqueService.chance,
        this.characteritiqueService.dommages,
        this.characteritiqueService.dommagesEau,
        this.characteritiqueService.dommagesCritique,
        this.characteritiqueService.dommagesMelee,
        this.characteritiqueService.dommagesDistance,
        this.characteritiqueService.dommagesAuxSorts
      )
    }
    if (type === 'air') {
      return Sorts.calcul(
        degat,
        this.characteritiqueService.puissance,
        this.characteritiqueService.agilite,
        this.characteritiqueService.dommages,
        this.characteritiqueService.dommagesAir,
        this.characteritiqueService.dommagesCritique,
        this.characteritiqueService.dommagesMelee,
        this.characteritiqueService.dommagesDistance,
        this.characteritiqueService.dommagesAuxSorts
      )
    }
    if (type === 'air-feu') {
      return Sorts.calcul(
        degat,
        this.characteritiqueService.puissance,
        this.characteritiqueService.agilite + this.characteritiqueService.intelligence,
        this.characteritiqueService.dommages,
        this.characteritiqueService.dommagesAir + this.characteritiqueService.dommagesFeu,
        this.characteritiqueService.dommagesCritique,
        this.characteritiqueService.dommagesMelee,
        this.characteritiqueService.dommagesDistance,
        this.characteritiqueService.dommagesAuxSorts
      )
    }
  }

}
