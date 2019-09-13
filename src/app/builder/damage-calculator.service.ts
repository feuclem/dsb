import {Injectable} from '@angular/core'
import {Sorts} from '../shared/entities/Sorts'
import {CharacteristiqueService} from '../shared/service/characteristique.service'

@Injectable()
export class DamageCalculatorService {

  constructor(private characteritiqueService: CharacteristiqueService) {
  }

  calculDegatBase(degat: number, type: string): number {
    if (type === 'terre') {
      return this.getDegatBase(degat, this.characteritiqueService._force.getValue(), this.characteritiqueService._dommagesTerre.getValue())
    }
    if (type === 'feu') {
      return this.getDegatBase(degat, this.characteritiqueService._intelligence.getValue(), this.characteritiqueService._dommagesFeu.getValue())
    }
    if (type === 'eau') {
      return this.getDegatBase(degat, this.characteritiqueService._chance.getValue(), this.characteritiqueService._dommagesEau.getValue())
    }
    if (type === 'air') {
      return this.getDegatBase(degat, this.characteritiqueService._agilite.getValue(), this.characteritiqueService._dommagesAir.getValue())
    }
    if (type === 'air-feu') {
      return this.getDegatBase(
        degat,
        this.characteritiqueService._agilite.getValue() + this.characteritiqueService._intelligence.getValue(),
        this.characteritiqueService._dommagesAir.getValue() + this.characteritiqueService._dommagesFeu.getValue()
      )
    }
  }

  calculDegatCritique(degat: number, type: string): number {
    if (type === 'terre') {
      return this.getDegatCritque(degat, this.characteritiqueService._force.getValue(), this.characteritiqueService._dommagesTerre.getValue())
    }
    if (type === 'feu') {
      return this.getDegatCritque(degat, this.characteritiqueService._intelligence.getValue(), this.characteritiqueService._dommagesFeu.getValue())
    }
    if (type === 'eau') {
      return this.getDegatCritque(degat, this.characteritiqueService._chance.getValue(), this.characteritiqueService._dommagesEau.getValue())
    }
    if (type === 'air') {
      return this.getDegatCritque(degat, this.characteritiqueService._agilite.getValue(), this.characteritiqueService._dommagesAir.getValue())
    }
    if (type === 'air-feu') {
      return this.getDegatCritque(
        degat,
        this.characteritiqueService._agilite.getValue() + this.characteritiqueService._intelligence.getValue(),
        this.characteritiqueService._dommagesAir.getValue() + this.characteritiqueService._dommagesFeu.getValue()
      )
    }
  }

  private getDegatBase(degat: number, degatElementaire: number, dommagesElementaire: number) {
    return Sorts.calcul(
      degat,
      this.characteritiqueService._puissance.getValue(),
      degatElementaire,
      this.characteritiqueService._dommages.getValue(),
      dommagesElementaire,
      0,
      this.characteritiqueService._dommagesMelee.getValue(),
      this.characteritiqueService._dommagesDistance.getValue(),
      this.characteritiqueService._dommagesAuxSorts.getValue()
    )
  }

  private getDegatCritque(degat: number, degatElementaire: number, dommagesElementaire: number) {
    return Sorts.calcul(
      degat,
      this.characteritiqueService._puissance.getValue(),
      degatElementaire,
      this.characteritiqueService._dommages.getValue(),
      dommagesElementaire,
      this.characteritiqueService._dommagesCritiques.getValue(),
      this.characteritiqueService._dommagesMelee.getValue(),
      this.characteritiqueService._dommagesDistance.getValue(),
      this.characteritiqueService._dommagesAuxSorts.getValue()
    )
  }
}
