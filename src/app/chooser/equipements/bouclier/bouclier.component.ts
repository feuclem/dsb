import {Component, OnInit} from '@angular/core'
import {BouclierHttpService} from './bouclier.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements/equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'

@Component({
  selector: 'dsb-bouclier',
  templateUrl: '../equipements/equipements.component.html',
  providers: [
    BouclierHttpService
  ]
})
export class BouclierComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    private bouclierHttpService: BouclierHttpService,
  ) {
    super(router, stuffService, statistiquesService, panoplieService)
  }

  ngOnInit() {
    this.bouclierHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(equipement: Equipement) {
    this.stuffService.bouclier = equipement.imgUrl
    super.setBuild(equipement)
  }
}
