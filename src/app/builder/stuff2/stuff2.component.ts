import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../shared/service/stuff.service'

@Component({
  selector: 'dsb-stuff2',
  templateUrl: './stuff2.component.html',
  styles: []
})
export class Stuff2Component implements OnInit {

  slot1: string
  slot2: string
  slot3: string
  slot4: string
  slot5: string
  slot6: string

  constructor(private stuffService: StuffService) {
  }

  ngOnInit() {

    this.slot1 = this.stuffService.slot1
    this.slot2 = this.stuffService.slot2
    this.slot3 = this.stuffService.slot3
    this.slot4 = this.stuffService.slot4
    this.slot5 = this.stuffService.slot5
    this.slot6 = this.stuffService.slot6
  }

}
