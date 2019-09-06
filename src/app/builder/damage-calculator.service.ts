import {Injectable} from '@angular/core'
import {Sorts} from '../shared/entities/Sorts'
import {CharacteritiqueService} from '../shared/service/characteritique.service'

@Injectable()
export class DamageCalculatorService {

  constructor(private characteritiqueService: CharacteritiqueService) {
  }

  calculDegatBase(degat: number, type: string): number {
    if (type === 'terre') {
      return this.getDegatBase(degat, this.characteritiqueService.force, this.characteritiqueService.dommagesTerre)
    }
    if (type === 'feu') {
      return this.getDegatBase(degat, this.characteritiqueService.intelligence, this.characteritiqueService.dommagesFeu)
    }
    if (type === 'eau') {
      return this.getDegatBase(degat, this.characteritiqueService.chance, this.characteritiqueService.dommagesEau)
    }
    if (type === 'air') {
      return this.getDegatBase(degat, this.characteritiqueService.agilite, this.characteritiqueService.dommagesAir)
    }
    if (type === 'air-feu') {
      return this.getDegatBase(
        degat,
        this.characteritiqueService.agilite + this.characteritiqueService.intelligence,
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
      return this.getDegatCritque(degat, this.characteritiqueService.force, this.characteritiqueService.dommagesTerre)
    }
    if (type === 'feu') {
      return this.getDegatCritque(degat, this.characteritiqueService.intelligence, this.characteritiqueService.dommagesFeu)
    }
    if (type === 'eau') {
      return this.getDegatCritque(degat, this.characteritiqueService.chance, this.characteritiqueService.dommagesEau)
    }
    if (type === 'air') {
      return this.getDegatCritque(degat, this.characteritiqueService.agilite, this.characteritiqueService.dommagesAir)
    }
    if (type === 'air-feu') {
      return this.getDegatCritque(
        degat,
        this.characteritiqueService.agilite + this.characteritiqueService.intelligence,
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
