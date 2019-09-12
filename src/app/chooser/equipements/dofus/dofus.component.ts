import {Component, OnInit} from '@angular/core'
import {DofusHttpService} from './dofus.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements/equipements.component'

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

  setBuild(index: number) {
    if (this.stuffService.slot1 === '') {
      this.stuffService.slot1 = this.equipements[index].imgUrl
    } else if (this.stuffService.slot2 === '') {
      this.stuffService.slot2 = this.equipements[index].imgUrl
    } else if (this.stuffService.slot3 === '') {
      this.stuffService.slot3 = this.equipements[index].imgUrl
    } else if (this.stuffService.slot4 === '') {
      this.stuffService.slot4 = this.equipements[index].imgUrl
    } else if (this.stuffService.slot5 === '') {
      this.stuffService.slot5 = this.equipements[index].imgUrl
    } else if (this.stuffService.slot6 === '') {
      this.stuffService.slot6 = this.equipements[index].imgUrl
    }
    super.setBuild(index)
  }
}
