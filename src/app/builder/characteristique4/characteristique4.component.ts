import {Component, OnInit} from '@angular/core'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'

@Component({
  selector: 'dsb-characteristique4',
  templateUrl: './characteristique4.component.html',
  styles: ['span {color: white}']
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

  resistanceCritiques: number
  resistancePoussees: number
  resistanceDistance: number
  resistanceMelee: number

  constructor(private characteritiqueService: CharacteristiqueService) { }

  ngOnInit() {
    this.getResistanceNeutre()
    this.getResistanceTerre()
    this.getResistanceFeu()
    this.getResistanceEau()
    this.getResistanceAir()
    this.getResistanceFixeNeutre()
    this.getResistanceFixeTerre()
    this.getResistanceFixeFeu()
    this.getResistanceFixeEau()
    this.getResistanceFixeAir()
    this.getResistanceCritiques()
    this.getResistancePoussees()
    this.getResistanceDistance()
    this.getResistanceMelee()
  }

  getResistanceNeutre() {
    this.characteritiqueService._resistanceNeutre.subscribe(value => this.resistanceNeutre = value)
  }
  getResistanceTerre() {
    this.characteritiqueService._resistanceTerre.subscribe(value => this.resistanceTerre = value)
  }
  getResistanceFeu() {
    this.characteritiqueService._resistanceFeu.subscribe(value => this.resistanceFeu = value)
  }
  getResistanceEau() {
    this.characteritiqueService._resistanceEau.subscribe(value => this.resistanceEau = value)
  }
  getResistanceAir() {
    this.characteritiqueService._resistanceAir.subscribe(value => this.resistanceAir = value)
  }
  getResistanceFixeNeutre() {
    this.characteritiqueService._resistanceFixeNeutre.subscribe(value => this.resistanceFixeNeutre = value)
  }
  getResistanceFixeTerre() {
    this.characteritiqueService._resistanceFixeTerre.subscribe(value => this.resistanceFixeTerre = value)
  }
  getResistanceFixeFeu() {
    this.characteritiqueService._resistanceFixeFeu.subscribe(value => this.resistanceFixeFeu = value)
  }
  getResistanceFixeEau() {
    this.characteritiqueService._resistanceFixeEau.subscribe(value => this.resistanceFixeEau = value)
  }
  getResistanceFixeAir() {
    this.characteritiqueService._resistanceFixeAir.subscribe(value => this.resistanceFixeAir = value)
  }
  getResistanceCritiques() {
    this.characteritiqueService._resistanceCritiques.subscribe(value => this.resistanceCritiques = value)
  }
  getResistancePoussees() {
    this.characteritiqueService._resistancePoussees.subscribe(value => this.resistancePoussees = value)
  }
  getResistanceDistance() {
    this.characteritiqueService._resistanceDistance.subscribe(value => this.resistanceDistance = value)
  }
  getResistanceMelee() {
    this.characteritiqueService._resistanceMelee.subscribe(value => this.resistanceMelee = value)
  }

}
