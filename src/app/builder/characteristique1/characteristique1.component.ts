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

  parchoVitalite: number
  parchoForce: number
  parchoIntelligence: number
  parchoChance: number
  parchoAgilite: number

  vitalite: number

  remainingPointsToUsed: number

  inputVitalite = 0
  inputForce = 0
  inputIntelligence = 0
  inputChance = 0
  inputAgilite = 0

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
    this.puissance = this.characteritiqueService.puissance

    this.getVitalite()
    this.getForce()
    this.getIntelligence()
    this.getChance()
    this.getAgilite()
    this.getRemainingPointsToUsed()

    this.getParchoVitalite()
    this.getParchoForce()
    this.getParchoIntelligence()
    this.getParchoChance()
    this.getParchoAgilite()
  }

  modifyStat(points: number, charac: String) {
    this.pointsdecaracService.addPointToCharacteristique(points, charac)
  }

  resetStats() {
    this.inputVitalite = 0
    this.inputForce = 0
    this.inputIntelligence = 0
    this.inputChance = 0
    this.inputAgilite = 0
    this.pointsdecaracService.resetRemainingPoints()
  }

  getVitalite() {
    this.characteritiqueService._vitalite.subscribe(value => this.vitalite = value)
  }

  getForce() {
    this.characteritiqueService._force.subscribe(value => this.force = value)
  }

  getIntelligence() {
    this.characteritiqueService._intelligence.subscribe(value => this.intelligence = value)
  }

  getChance() {
    this.characteritiqueService._chance.subscribe(value => this.chance = value)
  }

  getAgilite() {
    this.characteritiqueService._agilite.subscribe(value => this.agilite = value)
  }

  getParchoVitalite() {
    this.characteritiqueService._parchoVitalite.subscribe(value => this.parchoVitalite = value)
  }

  getParchoForce() {
    this.characteritiqueService._parchoForce.subscribe(value => this.parchoForce = value)
  }

  getParchoIntelligence() {
    this.characteritiqueService._parchoIntelligence.subscribe(value => this.parchoIntelligence = value)
  }

  getParchoChance() {
    this.characteritiqueService._parchoChance.subscribe(value => this.parchoChance = value)
  }

  getParchoAgilite() {
    this.characteritiqueService._parchoAgilite.subscribe(value => this.parchoAgilite = value)
  }

  getRemainingPointsToUsed() {
    this.pointsdecaracService._remainingPointsToUsed.subscribe(value => this.remainingPointsToUsed = value)
  }

}
