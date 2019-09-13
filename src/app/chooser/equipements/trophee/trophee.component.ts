import {Component, OnInit} from '@angular/core'
import {TropheeHttpService} from './trophee.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements/equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'
import {StuffViewModel} from '../../../builder/StuffViewModel'

@Component({
  selector: 'dsb-trophee',
  templateUrl: '../equipements/equipements.component.html',
  providers: [
    TropheeHttpService
  ]
})
export class TropheeComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    private tropheeHttpService: TropheeHttpService,
  ) {
    super(router, stuffService, statistiquesService, panoplieService)
  }

  ngOnInit() {
    this.tropheeHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setItem(equipement: Equipement) {
    if (this.stuffService.slot1 === undefined) {
      this.stuffService.slot1 = new StuffViewModel(
        equipement.imgUrl,
        equipement.stats,
        equipement.id
      )
    } else if (this.stuffService.slot2 === undefined) {
      this.stuffService.slot2 = new StuffViewModel(
        equipement.imgUrl,
        equipement.stats,
        equipement.id
      )
    } else if (this.stuffService.slot3 === undefined) {
      this.stuffService.slot3 = new StuffViewModel(
        equipement.imgUrl,
        equipement.stats,
        equipement.id
      )
    } else if (this.stuffService.slot4 === undefined) {
      this.stuffService.slot4 = new StuffViewModel(
        equipement.imgUrl,
        equipement.stats,
        equipement.id
      )
    } else if (this.stuffService.slot5 === undefined) {
      this.stuffService.slot5 = new StuffViewModel(
        equipement.imgUrl,
        equipement.stats,
        equipement.id
      )
    } else if (this.stuffService.slot6 === undefined) {
      this.stuffService.slot6 = new StuffViewModel(
        equipement.imgUrl,
        equipement.stats,
        equipement.id
      )
    }
    super.setItem(equipement)
  }
}
