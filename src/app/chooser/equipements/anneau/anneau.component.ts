import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements/equipements.component'
import {AnneauHttpService} from './anneau.http.service'
import {Equipement} from '../../../shared/entities/Equipement'

@Component({
  selector: 'dsb-anneaux',
  templateUrl: '../equipements/equipements.component.html',
  providers: [
    AnneauHttpService
  ]
})
export class AnneauComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    private anneauHttpService: AnneauHttpService,
  ) {
    super(router, stuffService, statistiquesService, panoplieService)
  }

  ngOnInit() {
    this.anneauHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(equipement: Equipement) {
    if (this.stuffService.anneau1 === '') {
      this.stuffService.anneau1 = equipement.imgUrl
    } else {
      this.stuffService.anneau2 = equipement.imgUrl
    }
    super.setBuild(equipement)
  }
}
