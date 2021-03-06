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
        this.stuffService.updateAmulette(equipement)
      } else if (equipement.type === 'Chapeau') {
        this.stuffService.updateCoiffe(equipement)
      } else if (equipement.type === 'Cape') {
        this.stuffService.updateCape(equipement)
      } else if (equipement.type === 'Ceinture') {
        this.stuffService.updateCeinture(equipement)
      } else if (equipement.type === 'Bottes') {
        this.stuffService.updateBottes(equipement)
      } else if (equipement.type === 'Anneau') {
        if (this.stuffService._anneau1.value === undefined) {
          this.stuffService.updateAnneau1(equipement)
        } else {
          this.stuffService.updateAnneau2(equipement)
        }
      }
      this.stuffService.updateListStuffEquipmentId(new StuffEquipementId(equipement.id, equipement.type))
      equipement.stats.forEach(stat => {
        this.statistiquesService.setStatInStuff(stat)
      })
    })
  }
}
