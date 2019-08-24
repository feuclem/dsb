import {Statistique} from './Statistique'

export class Bonus {
  number: number
  stats: Statistique[]

  constructor(
    number: number,
    stats: Statistique[]
  ) {
    this.number = number
    this.stats = stats
  }
}
