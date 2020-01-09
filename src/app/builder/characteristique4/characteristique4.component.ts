import {Component, OnInit} from '@angular/core'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'
import {PanoplieCharacteristiqueService} from '../../shared/service/panoplieCharacteristique.service'

@Component({
  selector: 'dsb-characteristique4',
  templateUrl: './characteristique4.component.html',
  styles: []
})
export class Characteristique4Component implements OnInit {

  resistanceNeutre: number
  resistanceTerre: number
  resistanceFeu: number
  resistanceEau: number
  resistanceAir: number
  resistanceFixeNeutre: number
  resistanceFixeTerre: number
  resistanceFixeFeu: number
  resistanceFixeEau: number
  resistanceFixeAir: number

  panoplieResistanceNeutre: number
  panoplieResistanceTerre: number
  panoplieResistanceFeu: number
  panoplieResistanceEau: number
  panoplieResistanceAir: number
  panoplieResistanceFixeNeutre: number
  panoplieResistanceFixeTerre: number
  panoplieResistanceFixeFeu: number
  panoplieResistanceFixeEau: number
  panoplieResistanceFixeAir: number

  resistanceCritiques: number
  resistancePoussees: number
  resistanceDistance: number
  resistanceMelee: number

  panoplieResistanceCritiques: number
  panoplieResistancePoussees: number
  panoplieResistanceDistance: number
  panoplieResistanceMelee: number

  constructor(
    private characteritiqueService: CharacteristiqueService,
    private panoplieCharacteristiqueService: PanoplieCharacteristiqueService
  ) {}

  ngOnInit() {
    this.characteritiqueService._resistanceNeutre.subscribe(value => this.resistanceNeutre = value)
    this.panoplieCharacteristiqueService._resistanceNeutre.subscribe(value => this.panoplieResistanceNeutre = value)
    this.characteritiqueService._resistanceTerre.subscribe(value => this.resistanceTerre = value)
    this.panoplieCharacteristiqueService._resistanceTerre.subscribe(value => this.panoplieResistanceTerre = value)
    this.characteritiqueService._resistanceFeu.subscribe(value => this.resistanceFeu = value)
    this.panoplieCharacteristiqueService._resistanceFeu.subscribe(value => this.panoplieResistanceFeu = value)
    this.characteritiqueService._resistanceEau.subscribe(value => this.resistanceEau = value)
    this.panoplieCharacteristiqueService._resistanceEau.subscribe(value => this.panoplieResistanceEau = value)
    this.characteritiqueService._resistanceAir.subscribe(value => this.resistanceAir = value)
    this.panoplieCharacteristiqueService._resistanceAir.subscribe(value => this.panoplieResistanceAir = value)
    this.characteritiqueService._resistanceFixeNeutre.subscribe(value => this.resistanceFixeNeutre = value)
    this.panoplieCharacteristiqueService._resistanceFixeNeutre.subscribe(value => this.panoplieResistanceFixeNeutre = value)
    this.characteritiqueService._resistanceFixeTerre.subscribe(value => this.resistanceFixeTerre = value)
    this.panoplieCharacteristiqueService._resistanceFixeTerre.subscribe(value => this.panoplieResistanceFixeTerre = value)
    this.characteritiqueService._resistanceFixeFeu.subscribe(value => this.resistanceFixeFeu = value)
    this.panoplieCharacteristiqueService._resistanceFixeFeu.subscribe(value => this.panoplieResistanceFixeFeu = value)
    this.characteritiqueService._resistanceFixeEau.subscribe(value => this.resistanceFixeEau = value)
    this.panoplieCharacteristiqueService._resistanceFixeEau.subscribe(value => this.panoplieResistanceFixeEau = value)
    this.characteritiqueService._resistanceFixeAir.subscribe(value => this.resistanceFixeAir = value)
    this.panoplieCharacteristiqueService._resistanceFixeAir.subscribe(value => this.panoplieResistanceFixeAir = value)
    this.characteritiqueService._resistanceCritiques.subscribe(value => this.resistanceCritiques = value)
    this.panoplieCharacteristiqueService._resistanceCritiques.subscribe(value => this.panoplieResistanceCritiques = value)
    this.characteritiqueService._resistancePoussees.subscribe(value => this.resistancePoussees = value)
    this.panoplieCharacteristiqueService._resistancePoussees.subscribe(value => this.panoplieResistancePoussees = value)
    this.characteritiqueService._resistanceDistance.subscribe(value => this.resistanceDistance = value)
    this.panoplieCharacteristiqueService._resistanceDistance.subscribe(value => this.panoplieResistanceDistance = value)
    this.characteritiqueService._resistanceMelee.subscribe(value => this.resistanceMelee = value)
    this.panoplieCharacteristiqueService._resistanceMelee.subscribe(value => this.panoplieResistanceMelee = value)
  }
}
