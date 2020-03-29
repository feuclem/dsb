import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'
import {EquipementsHttpService} from '../../../shared/httpService/equipements.http.service'
import {SLOT1, SLOT2, SLOT3, SLOT4, SLOT5, SLOT6} from '../../../shared/service/localstorage/localstore.constants'

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
    this.stuffService.updateSlots(equipement)
    super.setItem(equipement)
  }
}
