import {Component, OnInit} from '@angular/core'
import {CharacteritiqueService} from '../../shared/service/characteritique.service'

@Component({
  selector: 'dsb-resistance',
  templateUrl: './resistance.component.html',
  styles: []
})
export class ResistanceComponent implements OnInit {

  resistanceTerre: number
  resistanceFeu: number
  resistanceEau: number
  resistanceAir: number

  resistanceFixeTerre: number
  resistanceFixeFeu: number
  resistanceFixeEau: number
  resistanceFixeAir: number

  constructor(private characteritiqueService: CharacteritiqueService) {
  }

  ngOnInit() {
    this.resistanceTerre = this.characteritiqueService.resistanceTerre
    this.resistanceFeu = this.characteritiqueService.resistanceFeu
    this.resistanceEau = this.characteritiqueService.resistanceEau
    this.resistanceAir = this.characteritiqueService.resistanceAir

    this.resistanceFixeTerre = this.characteritiqueService.resistanceFixeTerre
    this.resistanceFixeFeu = this.characteritiqueService.resistanceFixeFeu
    this.resistanceFixeEau = this.characteritiqueService.resistanceFixeEau
    this.resistanceFixeAir = this.characteritiqueService.resistanceFixeAir
  }

}
