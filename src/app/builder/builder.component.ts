import {Component, OnInit} from '@angular/core'
import {StuffService} from '../shared/stuff.service'
import {CharacteritiqueService} from '../shared/characteritique.service'

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styles: []
})
export class BuilderComponent implements OnInit {

  arme: string

  force: number

  constructor(
    private stuffService: StuffService,
    private characteritiqueService: CharacteritiqueService) {
  }

  ngOnInit() {
    this.arme = this.stuffService.arme
    this.force = this.characteritiqueService.force
  }
}
