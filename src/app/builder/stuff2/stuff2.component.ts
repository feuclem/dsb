import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../shared/service/stuff.service'
import {StuffViewModel} from '../StuffViewModel'

@Component({
  selector: 'dsb-stuff2',
  templateUrl: './stuff2.component.html',
  styles: ['a {color: white}']
})
export class Stuff2Component implements OnInit {

  slot1: StuffViewModel
  slot2: StuffViewModel
  slot3: StuffViewModel
  slot4: StuffViewModel
  slot5: StuffViewModel
  slot6: StuffViewModel

  constructor(private stuffService: StuffService) {}

  ngOnInit() {
    this.stuffService.getSlot1().subscribe(value => this.slot1 = value)
    this.stuffService.getSlot2().subscribe(value => this.slot2 = value)
    this.stuffService.getSlot3().subscribe(value => this.slot3 = value)
    this.stuffService.getSlot4().subscribe(value => this.slot4 = value)
    this.stuffService.getSlot5().subscribe(value => this.slot5 = value)
    this.stuffService.getSlot6().subscribe(value => this.slot6 = value)
  }

}
