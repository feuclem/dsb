import {Injectable} from '@angular/core'
import {Sorts} from '../shared/entities/Sorts'
import {CharacteristiqueService} from '../shared/service/characteristique.service'

@Injectable()
export class DamageCalculatorService {

  constructor(private characteritiqueService: CharacteristiqueService) {
  }

  calculDegatBase(degat: number, type: string): number {
    if (type === 'terre') {
      return this.getDegatBase(degat, this.characteritiqueService._force.getValue(), this.characteritiqueService.dommagesTerre)
    }
    if (type === 'feu') {
      return this.getDegatBase(degat, this.characteritiqueService._intelligence.getValue(), this.characteritiqueService.dommagesFeu)
    }
    if (type === 'eau') {
      return this.getDegatBase(degat, this.characteritiqueService._chance.getValue(), this.characteritiqueService.dommagesEau)
    }
    if (type === 'air') {
      return this.getDegatBase(degat, this.characteritiqueService._agilite.getValue(), this.characteritiqueService.dommagesAir)
    }
    if (type === 'air-feu') {
      return this.getDegatBase(
        degat,
        this.characteritiqueService._agilite.getValue() + this.characteritiqueService._intelligence.getValue(),
        this.characteritiqueService.dommagesAir + this.characteritiqueService.dommagesFeu
      )
    }
  }

  private getDegatBase(degat: number, degatElementaire: number, dommagesElementaire: number) {
    return Sorts.calcul(
      degat,
      this.characteritiqueService.puissance,
      degatElementaire,
      this.characteritiqueService.dommages,
      dommagesElementaire,
      0,
      this.characteritiqueService.dommagesMelee,
      this.characteritiqueService.dommagesDistance,
      this.characteritiqueService.dommagesAuxSorts
    )
  }

  calculDegatCritique(degat: number, type: string): number {
    if (type === 'terre') {
      return this.getDegatCritque(degat, this.characteritiqueService._force.getValue(), this.characteritiqueService.dommagesTerre)
    }
    if (type === 'feu') {
      return this.getDegatCritque(degat, this.characteritiqueService._intelligence.getValue(), this.characteritiqueService.dommagesFeu)
    }
    if (type === 'eau') {
      return this.getDegatCritque(degat, this.characteritiqueService._chance.getValue(), this.characteritiqueService.dommagesEau)
    }
    if (type === 'air') {
      return this.getDegatCritque(degat, this.characteritiqueService._agilite.getValue(), this.characteritiqueService.dommagesAir)
    }
    if (type === 'air-feu') {
      return this.getDegatCritque(
        degat,
        this.characteritiqueService._agilite.getValue() + this.characteritiqueService._intelligence.getValue(),
        this.characteritiqueService.dommagesAir + this.characteritiqueService.dommagesFeu
      )
    }
  }

  private getDegatCritque(degat: number, degatElementaire: number, dommagesElementaire: number) {
    return Sorts.calcul(
      degat,
      this.characteritiqueService.puissance,
      degatElementaire,
      this.characteritiqueService.dommages,
      dommagesElementaire,
      this.characteritiqueService.dommagesCritiques,
      this.characteritiqueService.dommagesMelee,
      this.characteritiqueService.dommagesDistance,
      this.characteritiqueService.dommagesAuxSorts
    )
  }
}
