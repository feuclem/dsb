import {Injectable} from '@angular/core'
import {Panoplie} from '../entities/Panoplie'
import {Statistique} from '../entities/Statistique'
import {Equipement} from '../entities/Equipement'
import {StuffService} from './stuff.service'
import {StatistiquesService} from './statistiques.service'
import {StuffEquipementId} from '../entities/StuffEquipementId'

@Injectable()
export class PanoplieService {

  constructor(
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService
  ) {
  }

  private _listPanoplie = []

  get listPanoplie(): Panoplie[] {
    return this._listPanoplie
  }

  set listPanoplie(value: Panoplie[]) {
    this._listPanoplie = value
  }

  getPanoplieBonus(listIdEquipement: number[]): Statistique[] {
    let hasAlreadyPanoplie = false
    const stats: Statistique[] = []
    this.listPanoplie.map(panoplie => {
      const hasEquipementList = panoplie.equipementsId.map(s => listIdEquipement.includes(s))
      if (hasEquipementList.filter(it => it).length === 2) {
        stats.push(...panoplie.bonus[0].stats)
        hasAlreadyPanoplie = true
      }
      if (hasEquipementList.filter(it => it).length === 3) {
        stats.push(...panoplie.bonus[1].stats)
        hasAlreadyPanoplie = true
      }
      if (hasEquipementList.filter(it => it).length === 4) {
        stats.push(...panoplie.bonus[2].stats)
        hasAlreadyPanoplie = true
      }
    })
    return stats
  }

  getFullPanoplie(setId: number): Equipement[] {
    let equipements: Equipement[] = []
    this.listPanoplie.forEach(panoplie => {
      if (panoplie.id === setId) {
        equipements = panoplie.equipements
      }
    })
    return equipements
  }

  setPanoplieToStuff(setId: number) {
    const equipements = this.getFullPanoplie(setId)
    equipements.forEach(equipement => {
      if (equipement.type === 'Amulette') {
        this.stuffService.amulette = equipement.imgUrl
      } else if (equipement.type === 'Chapeau') {
        this.stuffService.coiffe = equipement.imgUrl
      } else if (equipement.type === 'Cape') {
        this.stuffService.cape = equipement.imgUrl
      } else if (equipement.type === 'Ceinture') {
        this.stuffService.ceinture = equipement.imgUrl
      } else if (equipement.type === 'Bottes') {
        this.stuffService.bottes = equipement.imgUrl
      } else if (equipement.type === 'Anneau') {
        if (this.stuffService.anneau1 === '') {
          this.stuffService.anneau1 = equipement.imgUrl
        } else {
          this.stuffService.anneau2 = equipement.imgUrl
        }
      }
      this.stuffService.listStuffEquipmentId = [new StuffEquipementId(equipement.id, equipement.type)]
      equipement.stats.forEach(stat => {
        this.statistiquesService.setStatInStuff(stat)
      })
    })
  }
}
