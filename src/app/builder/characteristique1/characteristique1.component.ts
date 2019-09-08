import {Component, OnInit} from '@angular/core'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'
import {PointsdecaracService} from '../../shared/service/pointsdecarac.service'

@Component({
  selector: 'dsb-characteristique1',
  templateUrl: './characteristique1.component.html',
  styles: ['span {color: white} .is-force{border-color: #582900} .is-vita{border-color: #ff43a2}']
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

  force: number
  intelligence: number
  chance: number
  agilite: number
  puissance: number

  vitalite: number

  remainingPointsToUsed: number

  constructor(
    private characteritiqueService: CharacteristiqueService,
    private pointsdecaracService: PointsdecaracService,
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
    this.puissance = this.characteritiqueService.puissance

    this.getVitalite()
    this.getRemainingPointsToUsed()
  }

  modifyStat(points: number, charac: String) {
    this.pointsdecaracService.addPointToCharacteristique(points, charac)
  }

  getVitalite() {
    this.characteritiqueService._vitalite.subscribe(value => this.vitalite = value)
  }

  getRemainingPointsToUsed() {
    this.pointsdecaracService._remainingPointsToUsed.subscribe(value => this.remainingPointsToUsed = value)
  }

}
