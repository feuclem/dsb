import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'
import {StuffViewModel} from '../../../builder/StuffViewModel'
import {EquipementsHttpService} from '../../../shared/httpService/equipements.http.service'

@Component({
  selector: 'dsb-trophee',
  templateUrl: '../equipements.component.html'
})
export class TropheeComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    equipementsHttpService: EquipementsHttpService
  ) {
    equipementsHttpService.type = 'trophees'
    super(router, stuffService, statistiquesService, panoplieService, equipementsHttpService)
  }

  ngOnInit() {
    super.ngOnInit()
  }

  // TODO CLEM faire un component parent avec DofusComponent
  setItem(equipement: Equipement) {
    if(this.stuffService._slot1.value === undefined) {
      this.stuffService.updateSlot1(new StuffViewModel(
        equipement.imgUrl,
        equipement.stats,
        equipement.id
        )
      )
    } else if(this.stuffService._slot2.value === undefined) {
      this.stuffService.updateSlot2(new StuffViewModel(
        equipement.imgUrl,
        equipement.stats,
        equipement.id
        )
      )
    } else if(this.stuffService._slot3.value === undefined) {
      this.stuffService.updateSlot3(new StuffViewModel(
        equipement.imgUrl,
        equipement.stats,
        equipement.id
        )
      )
    } else if(this.stuffService._slot4.value === undefined) {
      this.stuffService.updateSlot4(new StuffViewModel(
        equipement.imgUrl,
        equipement.stats,
        equipement.id
        )
      )
    } else if(this.stuffService._slot5.value === undefined) {
      this.stuffService.updateSlot5(new StuffViewModel(
        equipement.imgUrl,
        equipement.stats,
        equipement.id
        )
      )
    } else {
      this.stuffService.updateSlot6(new StuffViewModel(
        equipement.imgUrl,
        equipement.stats,
        equipement.id
        )
      )
    }
    super.setItem(equipement)
  }
}
