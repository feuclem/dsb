import {Statistique} from './Statistique'

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

  static getPanoplieBonus(listPanoplie: Panoplie[], listIdEquipement: number[]): Statistique[] {
    const stats: Statistique[] = []
    listPanoplie.map(panoplie => {
      const hasEquipementList = panoplie.equipementsId.map(s => listIdEquipement.includes(s))
      if (hasEquipementList.filter(it => it).length === 2) {
        stats.push(...panoplie.bonus[0].stats)
      }
      if (hasEquipementList.filter(it => it).length === 3) {
        stats.push(...panoplie.bonus[1].stats)
      }
    })
    return stats
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
