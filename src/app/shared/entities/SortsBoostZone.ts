import {Sorts} from './Sorts'

export class SortsBoostZone extends Sorts {
  labelBoostZone: string
  boostZone: number
  nombreCible: number

  constructor(label: string, image: string, type: string, normal: number[], critique: number[], labelBoostZone: string, boostZone: number, nombreCible: number) {
    super(label, image, type, normal, critique)
    this.labelBoostZone = labelBoostZone
    this.boostZone = boostZone
    this.nombreCible = nombreCible
  }
}
