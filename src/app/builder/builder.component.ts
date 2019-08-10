import {Component, OnInit} from '@angular/core'
import {StuffService} from '../shared/stuff.service'
import {StatistiquesService} from '../shared/statistiques.service'
import {Panoplie} from '../shared/entities/Panoplie'
import {PanoplieService} from '../shared/panoplie.service'
import {Statistique} from '../shared/entities/Statistique'

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styles: []
})
export class BuilderComponent implements OnInit {

  getBonusStatsToAdd: Statistique[]

  constructor(
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService,
    private panoplieService: PanoplieService) {
  }

  ngOnInit() {
    this.getBonusStatsToAdd = Panoplie.getPanoplieBonus(this.panoplieService.listPanoplie, this.stuffService.listIdEquipment)
    if (this.getBonusStatsToAdd.length !== 0) {
      this.getBonusStatsToAdd.map(stat => this.statistiquesService.setStatInStuff(stat))
      this.stuffService.resetListIdEquipment()
    }
  }
}
