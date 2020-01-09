import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'
import {StuffViewModel} from '../../../builder/StuffViewModel'
import {EquipementsHttpService} from '../../../shared/httpService/equipements.http.service'

@Component({
  selector: 'dsb-bottes',
  templateUrl: '../equipements.component.html'
})
export class BottesComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    equipementsHttpService: EquipementsHttpService
  ) {
    equipementsHttpService.type = 'bottes'
    super(router, stuffService, statistiquesService, panoplieService, equipementsHttpService)
  }

  ngOnInit() {
    super.ngOnInit()
  }

  setItem(equipement: Equipement) {
    this.stuffService.updateBottes(new StuffViewModel(
      equipement.imgUrl,
      equipement.stats,
      equipement.id
      )
    )
    super.setItem(equipement)
  }
}
