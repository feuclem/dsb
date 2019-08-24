import {Bonus} from './Bonus'

export class Panoplie {
  id: number
  name: string
  lvl: number
  type: string
  imgUrl: string
  bonus: Bonus[]
  equipementsId: number[]

  constructor(
    id: number,
    name: string,
    lvl: number,
    type: string,
    imgUrl: string,
    bonus: Bonus[],
    equipementsId: number[]
  ) {
    this.id = id
    this.name = name
    this.lvl = lvl
    this.type = type
    this.imgUrl = imgUrl
    this.bonus = bonus
    this.equipementsId = equipementsId
  }
}

