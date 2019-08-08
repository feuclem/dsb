import {Statistique} from './Statistique'

export class Equipements {
  id: number
  name: string
  lvl: number
  type: string
  imgUrl: string
  stats: Statistique[]

  constructor(
    id: number,
    name: string,
    lvl: number,
    type: string,
    imgUrl: string,
    stats: Statistique[]
  ) {
    this.id = id
    this.name = name
    this.lvl = lvl
    this.type = type
    this.imgUrl = imgUrl
    this.stats = stats
  }
}
