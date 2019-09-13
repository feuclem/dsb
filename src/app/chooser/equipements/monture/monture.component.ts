import {Component, OnInit} from '@angular/core'
import {MontureHttpService} from './monture.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements/equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'

@Component({
  selector: 'dsb-monture',
  templateUrl: '../equipements/equipements.component.html',
  providers: [
    MontureHttpService
  ]
})
export class MontureComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    private montureHttpService: MontureHttpService,
  ) {
    super(router, stuffService, statistiquesService, panoplieService)
  }

  ngOnInit() {
    this.montureHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(equipement: Equipement) {
    this.stuffService.monture = equipement.imgUrl
    super.setBuild(equipement)
  }
}
