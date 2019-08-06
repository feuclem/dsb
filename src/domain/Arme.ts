import {Statistique} from './Statistique'

export class Arme {
  id: number
  name: string
  lvl: number
  type: string
  imgUrl: string
  url: string
  stats: Statistique[]

  constructor(
    id: number,
    name: string,
    lvl: number,
    type: string,
    imgUrl: string,
    url: string,
    stats: Statistique[]
  ) {
    this.id = id
    this.name = name
    this.lvl = lvl
    this.type = type
    this.imgUrl = imgUrl
    this.url = url
    this.stats = stats
  }
}
