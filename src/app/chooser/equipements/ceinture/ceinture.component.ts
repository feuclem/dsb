import {Component, OnInit} from '@angular/core'
import {CeintureHttpService} from './ceinture.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements/equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'

@Component({
  selector: 'dsb-ceinture',
  templateUrl: '../equipements/equipements.component.html',
  providers: [
    CeintureHttpService
  ]
})
export class CeintureComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    private ceintureHttpService: CeintureHttpService,
  ) {
    super(router, stuffService, statistiquesService, panoplieService)
  }

  ngOnInit() {
    this.ceintureHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(equipement: Equipement) {
    this.stuffService.ceinture = equipement.imgUrl
    super.setBuild(equipement)
  }
}
