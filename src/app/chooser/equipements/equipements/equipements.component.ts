import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {Equipement} from '../../../shared/entities/Equipement'

@Component({
  selector: 'dsb-equipements',
  templateUrl: './equipements.component.html',
  styles: [],
})
export class EquipementsComponent implements OnInit {

  equipements: Equipement[]
  router: Router
  stuffService: StuffService
  statistiquesService: StatistiquesService
  panoplieService: PanoplieService

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService
  ) {
    this.router = router
    this.stuffService = stuffService
    this.statistiquesService = statistiquesService
    this.panoplieService = panoplieService
  }

  ngOnInit() {
  }

  setBuild(index: number) {
    this.stuffService.listIdEquipment = [this.equipements[index].id]
    this.equipements[index].stats.map(stat => this.statistiquesService.setStatInStuff(stat))
    this.router.navigate(['/'])
  }

  setPanoplie(setId: number) {
    this.panoplieService.setPanoplieToStuff(setId)
    this.router.navigate(['/'])
  }

  getFullPanoplie(setId: number): Equipement[] {
    return this.panoplieService.getFullPanoplie(setId)
  }

}
