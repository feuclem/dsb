import {Component, OnInit} from '@angular/core'
import {PanoplieHttpService} from './shared/panoplie.http.service'
import {PanoplieService} from './shared/panoplie.service'

@Component({
  selector: 'dsb-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  constructor(private panoplieHttpService: PanoplieHttpService, private panoplieService: PanoplieService) {
  }

  ngOnInit() {
    this.panoplieHttpService.getAllPanoplie().then(r => this.panoplieService.listPanoplie = r)
  }

  onActivate() {
    window.scroll(0, 0)
  }
}
