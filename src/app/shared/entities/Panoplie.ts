import {Bonus} from './Bonus'
import {Equipement} from './Equipement'

export class Panoplie {
  id: number
  name: string
  lvl: number
  type: string
  imgUrl: string
  bonus: Bonus[]
  equipementsId: number[]
  equipements: Equipement[]

  constructor(
    id: number,
    name: string,
    lvl: number,
    type: string,
    imgUrl: string,
    bonus: Bonus[],
    equipementsId: number[],
    equipements: Equipement[]
  ) {
    this.id = id
    this.name = name
    this.lvl = lvl
    this.type = type
    this.imgUrl = imgUrl
    this.bonus = bonus
    this.equipementsId = equipementsId
    this.equipements = equipements
  }
}

