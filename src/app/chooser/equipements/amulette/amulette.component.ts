import {Component, OnInit} from '@angular/core'
import {AmuletteHttpService} from './amulette.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements/equipements.component'

@Component({
  selector: 'dsb-amulettes',
  templateUrl: '../equipements/equipements.component.html',
  providers: [
    AmuletteHttpService
  ]
})
export class AmuletteComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    private amuletteHttpService: AmuletteHttpService,
  ) {
    super(router, stuffService, statistiquesService, panoplieService)
  }

  ngOnInit() {
    this.amuletteHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(index: number) {
    this.stuffService.amulette = this.equipements[index].imgUrl
    super.setBuild(index)
  }
}
