import {Sorts} from './Sorts'

export class SortsBoost extends Sorts {
  labelBoost: string
  boost: number

  constructor(label: string, image: string, type: string, normal: number[], critique: number[], labelBoost: string, boost: number) {
    super(label, image, type, normal, critique)
    this.labelBoost = labelBoost
    this.boost = boost
  }
}
