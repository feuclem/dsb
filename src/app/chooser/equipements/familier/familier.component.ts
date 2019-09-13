import {Component, OnInit} from '@angular/core'
import {FamilierHttpService} from './familier.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements/equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'

@Component({
  selector: 'dsb-familier',
  templateUrl: '../equipements/equipements.component.html',
  providers: [
    FamilierHttpService
  ]
})
export class FamilierComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    private familierHttpService: FamilierHttpService,
  ) {
    super(router, stuffService, statistiquesService, panoplieService)
  }

  ngOnInit() {
    this.familierHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(equipement: Equipement) {
    this.stuffService.familier = equipement.imgUrl
    super.setBuild(equipement)
  }
}
