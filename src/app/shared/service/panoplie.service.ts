import {Injectable} from '@angular/core'
import {Panoplie} from '../entities/Panoplie'
import {Statistique} from '../entities/Statistique'
import {Equipement} from '../entities/Equipement'
import {StuffService} from './stuff.service'
import {StatistiquesService} from './statistiques.service'
import {StuffViewModel} from '../../builder/StuffViewModel'

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
        this.stuffService.updateAmulette(new StuffViewModel(
          equipement.imgUrl,
          equipement.stats,
          equipement.id
        ))
      } else if (equipement.type === 'Chapeau') {
        this.stuffService.updateCoiffe(new StuffViewModel(
          equipement.imgUrl,
          equipement.stats,
          equipement.id
        ))
      } else if (equipement.type === 'Cape') {
        this.stuffService.updateCape(new StuffViewModel(
          equipement.imgUrl,
          equipement.stats,
          equipement.id
          )
        )
      } else if (equipement.type === 'Ceinture') {
        this.stuffService.updateCeinture(new StuffViewModel(
          equipement.imgUrl,
          equipement.stats,
          equipement.id
          )
        )
      } else if (equipement.type === 'Bottes') {
        this.stuffService.updateBottes(new StuffViewModel(
          equipement.imgUrl,
          equipement.stats,
          equipement.id
          )
        )
      } else if (equipement.type === 'Anneau') {
        let hasAnneau1Empty = true
        this.stuffService.getAnneau1().subscribe(value => {
          if (value === undefined) {
            this.stuffService.updateAnneau1(new StuffViewModel(
              equipement.imgUrl,
              equipement.stats,
              equipement.id
              )
            )
            hasAnneau1Empty = false
          }
        })
        if(hasAnneau1Empty) {
          this.stuffService.getAnneau2().subscribe(value => {
            if (value === undefined) {
              this.stuffService.updateAnneau1(new StuffViewModel(
                equipement.imgUrl,
                equipement.stats,
                equipement.id
                )
              )
            }
          })
        }
      }
      this.stuffService.addStuffFromListEquipmentId(equipement)
      equipement.stats.forEach(stat => {
        this.statistiquesService.setStatInStuff(stat)
      })
    })
  }
}
