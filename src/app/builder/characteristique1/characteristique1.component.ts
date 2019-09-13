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
    this.getPa()
    this.getPm()
    this.getPo()
    this.getInitiative()
    this.getInvocation()
    this.getCritique()
    this.getSoin()
    this.getProspection()
    this.getForce()
    this.getIntelligence()
    this.getChance()
    this.getAgilite()
    this.getPuissance()
    this.getParchoVitalite()
    this.getParchoForce()
    this.getParchoIntelligence()
    this.getParchoChance()
    this.getParchoAgilite()
    this.getVitalite()
    this.getRemainingPointsToUsed()
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

  getPa() {
    this.characteritiqueService._pa.subscribe(value => this.pa = value)
  }

  getPm() {
    this.characteritiqueService._pm.subscribe(value => this.pm = value)
  }

  getPo() {
    this.characteritiqueService._po.subscribe(value => this.po = value)
  }

  getInitiative() {
    this.characteritiqueService._initiative.subscribe(value => this.initiative = value)
  }

  getInvocation() {
    this.characteritiqueService._invocation.subscribe(value => this.invocation = value)
  }

  getCritique() {
    this.characteritiqueService._critique.subscribe(value => this.critique = value)
  }

  getSoin() {
    this.characteritiqueService._soin.subscribe(value => this.soin = value)
  }

  getProspection() {
    this.characteritiqueService._prospection.subscribe(value => this.prospection = value)
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

  getPuissance() {
    this.characteritiqueService._puissance.subscribe(value => this.puissance = value)
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

  getVitalite() {
    this.characteritiqueService._vitalite.subscribe(value => this.vitalite = value)
  }

  getRemainingPointsToUsed() {
    this.pointsdecaracService._remainingPointsToUsed.subscribe(value => this.remainingPointsToUsed = value)
  }

}
