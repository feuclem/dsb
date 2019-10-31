import {Component, OnInit} from '@angular/core'
import {CoiffeHttpService} from './coiffe.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements/equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'
import {StuffViewModel} from '../../../builder/StuffViewModel'

@Component({
  selector: 'dsb-coiffe',
  templateUrl: '../equipements/equipements.component.html',
  providers: [
    CoiffeHttpService
  ]
})
export class CoiffeComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    private dofusHttpService: CoiffeHttpService,
  ) {
    super(router, stuffService, statistiquesService, panoplieService)
  }

  ngOnInit() {
    this.dofusHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setItem(equipement: Equipement) {
    this.stuffService.updateCoiffe(new StuffViewModel(
      equipement.imgUrl,
      equipement.stats,
      equipement.id
    ))
    super.setItem(equipement)
  }
}
