import { Component, OnInit } from '@angular/core';
import {Statistique} from '../../shared/entities/Statistique'
import {Panoplie} from '../../shared/entities/Panoplie'
import {StuffService} from '../../shared/stuff.service'
import {StatistiquesService} from '../../shared/statistiques.service'
import {PanoplieService} from '../../shared/panoplie.service'

@Component({
  selector: 'dsb-panoplie-bonus',
  templateUrl: './panoplie-bonus.component.html',
  styles: []
})
export class PanoplieBonusComponent implements OnInit {

  getBonusStatsToAdd: Statistique[]

  constructor(
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService,
    private panoplieService: PanoplieService
  ) { }

  ngOnInit() {
    this.getBonusStatsToAdd = Panoplie.getPanoplieBonus(this.panoplieService.listPanoplie, this.stuffService.listIdEquipment)
    if (this.getBonusStatsToAdd.length !== 0) {
      this.getBonusStatsToAdd.map(stat => this.statistiquesService.setStatInStuff(stat))
      this.stuffService.resetListIdEquipment()
    }
  }

}
