import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'dsb-progressbar',
  templateUrl: './progressbar.component.html',
  styles: ['.customizedProgress {width: 50%; margin: auto} .forCenterProgress {margin-top: 25px; width: 100%}']
})
export class ProgressbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
