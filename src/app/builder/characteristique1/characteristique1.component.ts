import {Component, OnInit} from '@angular/core'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'
import {PointsdecaracService} from '../../shared/service/pointsdecarac.service'
import {PanoplieCharacteristiqueService} from '../../shared/service/panoplieCharacteristique.service'

// TODO CLEM attention y'a de la logique d'addition de valeur dans l'html
@Component({
  selector: 'dsb-characteristique1',
  templateUrl: './characteristique1.component.html',
  styles: []
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

  panopliePa: number
  panopliePm: number
  panopliePo: number
  panoplieInitiative: number
  panoplieInvocation: number
  panoplieCritique: number
  panoplieSoin: number
  panoplieProspection: number

  force: number
  intelligence: number
  chance: number
  agilite: number
  puissance: number

  panoplieForce: number
  panoplieIntelligence: number
  panoplieChance: number
  panoplieAgilite: number
  panopliePuissance: number

  parchoVitalite: number
  parchoForce: number
  parchoIntelligence: number
  parchoChance: number
  parchoAgilite: number

  vitalite: number
  panoplieVitalite: number

  remainingPointsToUsed: number

  inputVitalite = 0
  inputForce = 0
  inputIntelligence = 0
  inputChance = 0
  inputAgilite = 0

  constructor(
    private characteritiqueService: CharacteristiqueService,
    private panoplieCharacteristiqueService: PanoplieCharacteristiqueService,
    private pointsdecaracService: PointsdecaracService,
  ) {
  }

  ngOnInit() {
    this.characteritiqueService._pa.subscribe(value => this.pa = value)
    this.panoplieCharacteristiqueService._pa.subscribe(value => this.panopliePa = value)
    this.characteritiqueService._pm.subscribe(value => this.pm = value)
    this.panoplieCharacteristiqueService._pm.subscribe(value => this.panopliePm = value)
    this.characteritiqueService._po.subscribe(value => this.po = value)
    this.panoplieCharacteristiqueService._po.subscribe(value => this.panopliePo = value)
    this.characteritiqueService._initiative.subscribe(value => this.initiative = value)
    this.panoplieCharacteristiqueService._initiative.subscribe(value => this.panoplieInitiative = value)
    this.characteritiqueService._invocation.subscribe(value => this.invocation = value)
    this.panoplieCharacteristiqueService._invocation.subscribe(value => this.panoplieInvocation = value)
    this.characteritiqueService._critique.subscribe(value => this.critique = value)
    this.panoplieCharacteristiqueService._critique.subscribe(value => this.panoplieCritique = value)
    this.characteritiqueService._soin.subscribe(value => this.soin = value)
    this.panoplieCharacteristiqueService._soin.subscribe(value => this.panoplieSoin = value)
    this.characteritiqueService._prospection.subscribe(value => this.prospection = value)
    this.panoplieCharacteristiqueService._prospection.subscribe(value => this.panoplieProspection = value)
    this.characteritiqueService._force.subscribe(value => this.force = value)
    this.panoplieCharacteristiqueService._force.subscribe(value => this.panoplieForce = value)
    this.characteritiqueService._intelligence.subscribe(value => this.intelligence = value)
    this.panoplieCharacteristiqueService._intelligence.subscribe(value => this.panoplieIntelligence = value)
    this.characteritiqueService._chance.subscribe(value => this.chance = value)
    this.panoplieCharacteristiqueService._chance.subscribe(value => this.panoplieChance = value)
    this.characteritiqueService._agilite.subscribe(value => this.agilite = value)
    this.panoplieCharacteristiqueService._agilite.subscribe(value => this.panoplieAgilite = value)
    this.characteritiqueService._puissance.subscribe(value => this.puissance = value)
    this.panoplieCharacteristiqueService._puissance.subscribe(value => this.panopliePuissance = value)
    this.characteritiqueService._parchoVitalite.subscribe(value => this.parchoVitalite = value)
    this.characteritiqueService._parchoForce.subscribe(value => this.parchoForce = value)
    this.characteritiqueService._parchoIntelligence.subscribe(value => this.parchoIntelligence = value)
    this.characteritiqueService._parchoChance.subscribe(value => this.parchoChance = value)
    this.characteritiqueService._parchoAgilite.subscribe(value => this.parchoAgilite = value)
    this.characteritiqueService._vitalite.subscribe(value => this.vitalite = value)
    this.panoplieCharacteristiqueService._vitalite.subscribe(value => this.panoplieVitalite = value)
    this.getRemainingPointsToUsed()
  }

  // TODO CLEM sortir ca dans un service ou dans un component
  modifyStat(points: number, charac: String) {
    if(this.pointsdecaracService.hasRemainingPointsAvailable(points)) {
      this.pointsdecaracService.addPointToCharacteristique(points, charac)
    } else {
      alert('Vous ne pouvez plus ajouter de points de caractéristiques.')
    }
  }

  resetStats() {
    this.inputVitalite = 0
    this.inputForce = 0
    this.inputIntelligence = 0
    this.inputChance = 0
    this.inputAgilite = 0
    this.pointsdecaracService.resetRemainingPoints()
  }

  getRemainingPointsToUsed() {
    this.pointsdecaracService._remainingPointsToUsed.subscribe(value => this.remainingPointsToUsed = value)
  }
}
