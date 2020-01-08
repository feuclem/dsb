import {Component, OnInit} from '@angular/core'
import {DofusHttpService} from './dofus.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements/equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'
import {StuffViewModel} from '../../../builder/StuffViewModel'

@Component({
  selector: 'dsb-dofus',
  templateUrl: '../equipements/equipements.component.html',
  providers: [
    DofusHttpService
  ]
})
export class DofusComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    private dofusHttpService: DofusHttpService,
  ) {
    super(router, stuffService, statistiquesService, panoplieService)
  }

  ngOnInit() {
    this.dofusHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setItem(equipement: Equipement) {
    let hasSlot1Empty = true
    this.stuffService.getSlot1().subscribe(value => {
      if(value === undefined) {
        this.stuffService.updateSlot1(new StuffViewModel(
          equipement.imgUrl,
          equipement.stats,
          equipement.id
          )
        )
        hasSlot1Empty = false
      }
    })

    let hasSlot2Empty = true
    if(hasSlot1Empty) {
      this.stuffService.getSlot2().subscribe(value => {
        if(value === undefined) {
          this.stuffService.updateSlot2(new StuffViewModel(
            equipement.imgUrl,
            equipement.stats,
            equipement.id
            )
          )
          hasSlot2Empty = false
        }
      })
    }

    let hasSlot3Empty = true
    if(hasSlot1Empty && hasSlot2Empty) {
      this.stuffService.getSlot3().subscribe(value => {
        if(value === undefined) {
          this.stuffService.updateSlot3(new StuffViewModel(
            equipement.imgUrl,
            equipement.stats,
            equipement.id
            )
          )
          hasSlot3Empty = false
        }
      })
    }

    let hasSlot4Empty = true
    if(hasSlot1Empty && hasSlot2Empty && hasSlot3Empty) {
      this.stuffService.getSlot4().subscribe(value => {
        if(value === undefined) {
          this.stuffService.updateSlot4(new StuffViewModel(
            equipement.imgUrl,
            equipement.stats,
            equipement.id
            )
          )
          hasSlot4Empty = false
        }
      })
    }

    let hasSlot5Empty = true
    if(hasSlot1Empty && hasSlot2Empty && hasSlot3Empty && hasSlot4Empty) {
      this.stuffService.getSlot5().subscribe(value => {
        if(value === undefined) {
          this.stuffService.updateSlot5(new StuffViewModel(
            equipement.imgUrl,
            equipement.stats,
            equipement.id
            )
          )
          hasSlot5Empty = false
        }
      })
    }

    if(hasSlot1Empty && hasSlot2Empty && hasSlot3Empty && hasSlot4Empty && hasSlot5Empty) {
      this.stuffService.getSlot6().subscribe(value => {
        if(value === undefined) {
          this.stuffService.updateSlot6(new StuffViewModel(
            equipement.imgUrl,
            equipement.stats,
            equipement.id
            )
          )
        }
      })
    }
    super.setItem(equipement)
  }
}
