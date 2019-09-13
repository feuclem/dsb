import {Component, OnInit} from '@angular/core'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'

@Component({
  selector: 'dsb-characteristique2',
  templateUrl: './characteristique2.component.html',
  styles: ['span {color: white}']
})
export class Characteristique2Component implements OnInit {

  dommages: number
  dommagesNeutre: number
  dommagesTerre: number
  dommagesFeu: number
  dommagesEau: number
  dommagesAir: number

  dommagesMelee: number
  dommagesDistance: number
  dommagesAuxSorts: number
  dommagesCritiques: number
  dommagesPoussee: number

  constructor(private characteritiqueService: CharacteristiqueService) { }

  ngOnInit() {
    this.getDommages()
    this.getDommagesNeutre()
    this.getDommagesTerre()
    this.getDommagesFeu()
    this.getDommagesEau()
    this.getDommagesAir()
    this.getDommagesMelee()
    this.getDommagesDistance()
    this.getDommagesAuxSorts()
    this.getDommagesCritiques()
    this.getDommagesPoussee()
  }

  getDommages() {
    this.characteritiqueService._dommages.subscribe(value => this.dommages = value)
  }
  getDommagesNeutre() {
    this.characteritiqueService._dommagesNeutre.subscribe(value => this.dommagesNeutre = value)
  }
  getDommagesTerre() {
    this.characteritiqueService._dommagesTerre.subscribe(value => this.dommagesTerre = value)
  }
  getDommagesFeu() {
    this.characteritiqueService._dommagesFeu.subscribe(value => this.dommagesFeu = value)
  }
  getDommagesEau() {
    this.characteritiqueService._dommagesEau.subscribe(value => this.dommagesEau = value)
  }
  getDommagesAir() {
    this.characteritiqueService._dommagesAir.subscribe(value => this.dommagesAir = value)
  }
  getDommagesMelee() {
    this.characteritiqueService._dommagesMelee.subscribe(value => this.dommagesMelee = value)
  }
  getDommagesDistance() {
    this.characteritiqueService._dommagesDistance.subscribe(value => this.dommagesDistance = value)
  }
  getDommagesAuxSorts() {
    this.characteritiqueService._dommagesAuxSorts.subscribe(value => this.dommagesAuxSorts = value)
  }
  getDommagesCritiques() {
    this.characteritiqueService._dommagesCritiques.subscribe(value => this.dommagesCritiques = value)
  }
  getDommagesPoussee() {
    this.characteritiqueService._dommagesPoussee.subscribe(value => this.dommagesPoussee = value)
  }
}


