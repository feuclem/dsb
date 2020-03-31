import {Component, OnInit} from '@angular/core'
import {PanoplieHttpService} from './shared/httpService/panoplie.http.service'
import {PanoplieService} from './shared/service/panoplie.service'
import {FirebaseHttpService} from './shared/httpService/firebase.http.service'
import {StuffService} from './shared/service/stuff.service'

@Component({
  selector: 'dsb-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  constructor(
    private panoplieHttpService: PanoplieHttpService,
    private panoplieService: PanoplieService,
    private firebaseHttpService: FirebaseHttpService,
    private stuffService: StuffService) {
  }

  ngOnInit() {
    this.panoplieHttpService.getAllPanoplie().then(r => this.panoplieService.listPanoplie = r)
    this.firebaseHttpService.init()
    this.stuffService.initStuff()
  }

  onActivate() {
    window.scroll(0, 0)
  }
}
