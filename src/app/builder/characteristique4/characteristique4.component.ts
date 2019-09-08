import { Component, OnInit } from '@angular/core';
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
    this.resistanceNeutre = this.characteritiqueService.resistanceNeutre
    this.resistanceTerre = this.characteritiqueService.resistanceTerre
    this.resistanceFeu = this.characteritiqueService.resistanceFeu
    this.resistanceEau = this.characteritiqueService.resistanceEau
    this.resistanceAir = this.characteritiqueService.resistanceAir
    this.resistanceFixeNeutre = this.characteritiqueService.resistanceFixeNeutre
    this.resistanceFixeTerre = this.characteritiqueService.resistanceFixeTerre
    this.resistanceFixeFeu = this.characteritiqueService.resistanceFixeFeu
    this.resistanceFixeEau = this.characteritiqueService.resistanceFixeEau
    this.resistanceFixeAir = this.characteritiqueService.resistanceFixeAir

    this.resistanceCritiques = this.characteritiqueService.resistanceCritiques
    this.resistancePoussees = this.characteritiqueService.resistancePoussees
    this.resistanceDistance = this.characteritiqueService.resistanceDistance
    this.resistanceMelee = this.characteritiqueService.resistanceMelee
  }

}
