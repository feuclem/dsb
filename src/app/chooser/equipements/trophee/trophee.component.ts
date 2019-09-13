import {Component, OnInit} from '@angular/core'
import {TropheeHttpService} from './trophee.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements/equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'

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

  setBuild(equipement: Equipement) {
    if (this.stuffService.slot1 === '') {
      this.stuffService.slot1 = equipement.imgUrl
    } else if (this.stuffService.slot2 === '') {
      this.stuffService.slot2 = equipement.imgUrl
    } else if (this.stuffService.slot3 === '') {
      this.stuffService.slot3 = equipement.imgUrl
    } else if (this.stuffService.slot4 === '') {
      this.stuffService.slot4 = equipement.imgUrl
    } else if (this.stuffService.slot5 === '') {
      this.stuffService.slot5 = equipement.imgUrl
    } else if (this.stuffService.slot6 === '') {
      this.stuffService.slot6 = equipement.imgUrl
    }
    super.setBuild(equipement)
  }
}
