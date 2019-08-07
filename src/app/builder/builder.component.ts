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
  amulette: string
  force: number
  intelligence: number
  chance: number
  agilite: number

  constructor(
    private stuffService: StuffService,
    private characteritiqueService: CharacteritiqueService) {
  }

  ngOnInit() {
    this.arme = this.stuffService.arme
    this.amulette = this.stuffService.amulette
    this.force = this.characteritiqueService.force
    this.intelligence = this.characteritiqueService.intelligence
    this.chance = this.characteritiqueService.chance
    this.agilite = this.characteritiqueService.agilite
  }
}
