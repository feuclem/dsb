import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../shared/service/stuff.service'
import {StuffViewModel} from '../StuffViewModel'
import {StatistiquesService} from '../../shared/service/statistiques.service'

@Component({
  selector: 'dsb-stuff2',
  templateUrl: './stuff2.component.html',
  styles: []
})
export class Stuff2Component implements OnInit {

  slot1: StuffViewModel
  slot2: StuffViewModel
  slot3: StuffViewModel
  slot4: StuffViewModel
  slot5: StuffViewModel
  slot6: StuffViewModel

  constructor(
    private stuffService: StuffService,
    private statistiquesService: StatistiquesService
  ) {}

  ngOnInit() {
    this.stuffService.getSlot1().subscribe(value => this.slot1 = value)
    this.stuffService.getSlot2().subscribe(value => this.slot2 = value)
    this.stuffService.getSlot3().subscribe(value => this.slot3 = value)
    this.stuffService.getSlot4().subscribe(value => this.slot4 = value)
    this.stuffService.getSlot5().subscribe(value => this.slot5 = value)
    this.stuffService.getSlot6().subscribe(value => this.slot6 = value)
  }

  removeSlot1(stuffViewModel: StuffViewModel) {
    this.stuffService.updateSlot1(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeSlot2(stuffViewModel: StuffViewModel) {
    this.stuffService.updateSlot2(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeSlot3(stuffViewModel: StuffViewModel) {
    this.stuffService.updateSlot3(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeSlot4(stuffViewModel: StuffViewModel) {
    this.stuffService.updateSlot4(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeSlot5(stuffViewModel: StuffViewModel) {
    this.stuffService.updateSlot5(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

  removeSlot6(stuffViewModel: StuffViewModel) {
    this.stuffService.updateSlot6(undefined)
    stuffViewModel.statistiques.map(stat => this.statistiquesService.unsetStatInStuff(stat))
    this.stuffService.removeStuffFromListEquipmentId(stuffViewModel.idEquipement)
  }

}
