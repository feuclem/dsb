import {Component, OnInit} from '@angular/core'
import {ClasseService} from '../chooser/classe/classe.service'

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styles: ['main {margin-top: 25px}']
})
export class BuilderComponent implements OnInit {
  classe: string

  constructor(
    private classeService: ClasseService) {
  }

  ngOnInit() {
    this.classeService._classe.subscribe(value => this.classe = value)
  }
}
