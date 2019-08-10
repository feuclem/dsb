import {Component, OnInit} from '@angular/core'
import {CharacteritiqueService} from '../../shared/characteritique.service'

@Component({
  selector: 'dsb-characteristique2',
  templateUrl: './characteristique2.component.html',
  styles: []
})
export class Characteristique2Component implements OnInit {

  dommages: number
  dommagesTerre: number
  dommagesFeu: number
  dommagesEau: number
  dommagesAir: number
  dommagesCritique: number

  dommagesMelee: number
  dommagesDistance: number
  dommagesAuxSorts: number

  constructor(private characteritiqueService: CharacteritiqueService) { }

  ngOnInit() {
    this.dommages = this.characteritiqueService.dommages
    this.dommagesTerre = this.characteritiqueService.dommagesTerre
    this.dommagesFeu = this.characteritiqueService.dommagesFeu
    this.dommagesEau = this.characteritiqueService.dommagesEau
    this.dommagesAir = this.characteritiqueService.dommagesAir
    this.dommagesCritique = this.characteritiqueService.dommagesCritique

    this.dommagesMelee = this.characteritiqueService.dommagesMelee
    this.dommagesDistance = this.characteritiqueService.dommagesDistance
    this.dommagesAuxSorts = this.characteritiqueService.dommagesAuxSorts
  }

}
