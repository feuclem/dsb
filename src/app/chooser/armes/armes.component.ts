import { Component, OnInit } from '@angular/core'
import {ArmesService} from './armes.service'

@Component({
  selector: 'armes',
  templateUrl: './armes.component.html',
  styles: [],
  providers: [ArmesService]
})
export class ArmesComponent implements OnInit {

  constructor(private armesService: ArmesService) { }

  ngOnInit() {
    this.armesService.getAllArmes()
  }
}
