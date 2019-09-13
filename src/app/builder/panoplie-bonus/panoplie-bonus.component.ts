import {Component, OnInit} from '@angular/core'
import {Statistique} from '../../shared/entities/Statistique'
import {StuffService} from '../../shared/service/stuff.service'
import {StatistiquesService} from '../../shared/service/statistiques.service'
import {PanoplieService} from '../../shared/service/panoplie.service'

@Component({
  selector: 'dsb-panoplie-bonus',
  templateUrl: './panoplie-bonus.component.html',
  styles: ['span {color: white}']
})
export class PanoplieBonusComponent implements OnInit {

  getBonusStatsToAdd: Statistique[]

  constructor(
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService,
    private panoplieService: PanoplieService
  ) {
  }

  ngOnInit() {
    this.getBonusStatsToAdd = []
    const listIdEquipement = this.stuffService.listStuffEquipmentId.map(value => value.id)
    if (listIdEquipement.length > 0) {
      this.getBonusStatsToAdd = this.panoplieService.getPanoplieBonus(listIdEquipement)
      if (this.getBonusStatsToAdd.length !== 0) {
        this.getBonusStatsToAdd.map(stat => {
          this.statistiquesService.setStatInStuff(stat)
        })
      }
    }
  }

}
