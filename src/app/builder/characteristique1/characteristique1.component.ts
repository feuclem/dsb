import {Component, OnInit} from '@angular/core'
import {CharacteritiqueService} from '../../shared/characteritique.service'

@Component({
  selector: 'dsb-characteristique1',
  templateUrl: './characteristique1.component.html',
  styles: []
})
export class Characteristique1Component implements OnInit {

  force: number
  intelligence: number
  chance: number
  agilite: number
  vitalite: number
  puissance: number

  constructor(
    private characteritiqueService: CharacteritiqueService,
  ) { }

  ngOnInit() {
    this.force = this.characteritiqueService.force
    this.intelligence = this.characteritiqueService.intelligence
    this.chance = this.characteritiqueService.chance
    this.agilite = this.characteritiqueService.agilite
    this.vitalite = this.characteritiqueService.vitalite
    this.puissance = this.characteritiqueService.puissance
  }

}
