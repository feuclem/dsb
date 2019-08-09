import {Statistique} from './Statistique'

export class Panoplie {
  id: number
  name: string
  lvl: number
  type: string
  imgUrl: string
  bonus: Bonus[]

  constructor(
    id: number,
    name: string,
    lvl: number,
    type: string,
    imgUrl: string,
    bonus: Bonus[]
  ) {
    this.id = id
    this.name = name
    this.lvl = lvl
    this.type = type
    this.imgUrl = imgUrl
    this.bonus = bonus
  }
}

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
