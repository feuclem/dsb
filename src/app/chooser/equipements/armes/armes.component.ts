import {Component, OnInit} from '@angular/core'
import {Arme} from '../../../shared/entities/Arme'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {StuffViewModel} from '../../../builder/StuffViewModel'
import {EquipementsComponent} from '../equipements.component'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsHttpService} from '../../../shared/httpService/equipements.http.service'
import {Equipement} from '../../../shared/entities/Equipement'

@Component({
  selector: 'armes',
  templateUrl: '../equipements.component.html'
})
export class ArmesComponent extends EquipementsComponent implements OnInit {

  armes: Arme[]

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    equipementsHttpService: EquipementsHttpService) {
    equipementsHttpService.type = 'armes'
    super(router, stuffService, statistiquesService, panoplieService, equipementsHttpService)
  }

  ngOnInit() {
    super.ngOnInit()
  }

  setItem(equipement: Equipement) {
    this.stuffService.updateArme(new StuffViewModel(
      equipement.imgUrl,
      equipement.stats,
      equipement.id
    ))
    super.setItem(equipement)
  }
}
