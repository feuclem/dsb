import {Statistique} from './Statistique'

export class Equipement {
  id: number
  name: string
  lvl: number
  type: string
  imgUrl: string
  stats: Statistique[]
  setId: number

  constructor(
    id: number,
    name: string,
    lvl: number,
    type: string,
    imgUrl: string,
    stats: Statistique[],
    setId: number
  ) {
    this.id = id
    this.name = name
    this.lvl = lvl
    this.type = type
    this.imgUrl = imgUrl
    this.stats = stats
    this.setId = setId
  }
}
