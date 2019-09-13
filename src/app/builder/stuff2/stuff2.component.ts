import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../shared/service/stuff.service'

@Component({
  selector: 'dsb-stuff2',
  templateUrl: './stuff2.component.html',
  styles: ['a {color: white}']
})
export class Stuff2Component implements OnInit {

  slot1: String
  slot2: String
  slot3: String
  slot4: String
  slot5: String
  slot6: String

  constructor(private stuffService: StuffService) {
  }

  ngOnInit() {
    this.slot1 = this.stuffService.slot1 ? this.stuffService.slot1.imgUrl : ''
    this.slot2 = this.stuffService.slot2 ? this.stuffService.slot2.imgUrl : ''
    this.slot3 = this.stuffService.slot3 ? this.stuffService.slot3.imgUrl : ''
    this.slot4 = this.stuffService.slot4 ? this.stuffService.slot4.imgUrl : ''
    this.slot5 = this.stuffService.slot5 ? this.stuffService.slot5.imgUrl : ''
    this.slot6 = this.stuffService.slot6 ? this.stuffService.slot6.imgUrl : ''
  }

}
