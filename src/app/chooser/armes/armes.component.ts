import {Component, OnInit} from '@angular/core'
import {ArmesServiceHttp} from './armes.service.http'
import {Arme} from '../../../domain/Arme'

@Component({
  selector: 'armes',
  templateUrl: './armes.component.html',
  styles: [],
  providers: [ArmesServiceHttp]
})
export class ArmesComponent implements OnInit {

  armes: Arme[]

  constructor(private armesService: ArmesServiceHttp) {
  }

  ngOnInit() {
    this.armesService.getAllArmes().then(response => this.armes = response)
  }
}
