import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../shared/service/stuff.service'
import {StatistiquesService} from '../../shared/service/statistiques.service'
import {Equipement} from '../../shared/entities/Equipement'

@Component({
  selector: 'dsb-stuff2',
  templateUrl: './stuff2.component.html',
  styles: []
})
export class Stuff2Component implements OnInit {

  slot1: Equipement
  slot2: Equipement
  slot3: Equipement
  slot4: Equipement
  slot5: Equipement
  slot6: Equipement

  constructor(
    private stuffService: StuffService
  ) {}

  ngOnInit() {
    this.stuffService.getSlot1().subscribe(value => this.slot1 = value)
    this.stuffService.getSlot2().subscribe(value => this.slot2 = value)
    this.stuffService.getSlot3().subscribe(value => this.slot3 = value)
    this.stuffService.getSlot4().subscribe(value => this.slot4 = value)
    this.stuffService.getSlot5().subscribe(value => this.slot5 = value)
    this.stuffService.getSlot6().subscribe(value => this.slot6 = value)
  }

  removeSlot1(equipement: Equipement) {
    this.stuffService.updateSlot1(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeSlot2(equipement: Equipement) {
    this.stuffService.updateSlot2(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeSlot3(equipement: Equipement) {
    this.stuffService.updateSlot3(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeSlot4(equipement: Equipement) {
    this.stuffService.updateSlot4(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeSlot5(equipement: Equipement) {
    this.stuffService.updateSlot5(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

  removeSlot6(equipement: Equipement) {
    this.stuffService.updateSlot6(undefined)
    this.stuffService.unsetItemStat(equipement)
  }

}
