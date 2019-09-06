import {Component, OnInit} from '@angular/core'
import {CharacteritiqueService} from '../../shared/service/characteritique.service'

@Component({
  selector: 'dsb-characteristique1',
  templateUrl: './characteristique1.component.html',
  styles: ['span {color: white}']
})
export class Characteristique1Component implements OnInit {

  pa: number
  pm: number
  po: number
  initiative: number
  invocation: number
  critique: number
  soin: number
  prospection: number

  vitalite: number
  force: number
  intelligence: number
  chance: number
  agilite: number
  puissance: number

  constructor(
    private characteritiqueService: CharacteritiqueService,
  ) {
  }

  ngOnInit() {
    this.pa = this.characteritiqueService.pa
    this.pm = this.characteritiqueService.pm
    this.po = this.characteritiqueService.po
    this.initiative = this.characteritiqueService.initiative
    this.invocation = this.characteritiqueService.invocations
    this.critique = this.characteritiqueService.critique
    this.soin = this.characteritiqueService.soins
    this.prospection = this.characteritiqueService.prospection
    this.force = this.characteritiqueService.force
    this.intelligence = this.characteritiqueService.intelligence
    this.chance = this.characteritiqueService.chance
    this.agilite = this.characteritiqueService.agilite
    this.vitalite = this.characteritiqueService.vitalite
    this.puissance = this.characteritiqueService.puissance
  }

}
