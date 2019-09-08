import {Component, OnInit} from '@angular/core'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'

@Component({
  selector: 'dsb-characteristique2',
  templateUrl: './characteristique2.component.html',
  styles: ['span {color: white}']
})
export class Characteristique2Component implements OnInit {

  dommages: number
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
    this.dommages = this.characteritiqueService.dommages
    this.dommagesTerre = this.characteritiqueService.dommagesTerre
    this.dommagesFeu = this.characteritiqueService.dommagesFeu
    this.dommagesEau = this.characteritiqueService.dommagesEau
    this.dommagesAir = this.characteritiqueService.dommagesAir

    this.dommagesCritiques = this.characteritiqueService.dommagesCritiques
    this.dommagesMelee = this.characteritiqueService.dommagesMelee
    this.dommagesDistance = this.characteritiqueService.dommagesDistance
    this.dommagesAuxSorts = this.characteritiqueService.dommagesAuxSorts
    this.dommagesPoussee = this.characteritiqueService.dommagesPoussee
  }

}
