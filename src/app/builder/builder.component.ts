import {Component, OnInit} from '@angular/core'
import {ClasseService} from '../chooser/classe/classe.service'

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styles: []
})
export class BuilderComponent implements OnInit {
  classe: string

  constructor(private classeService: ClasseService) {
  }

  ngOnInit() {
    console.log('passe')
    this.classe = this.classeService._classe.getValue()
  }
}
