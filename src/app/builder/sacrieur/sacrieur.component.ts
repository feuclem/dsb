import {Component, OnInit} from '@angular/core'
import {DamageCalculatorService} from '../damage-calculator.service'
import {Sacrieur} from '../../shared/entities/classe/Sacrieur'

@Component({
  selector: 'dsb-sacrieur',
  templateUrl: './sacrieur.component.html',
  styles: []
})
export class SacrieurComponent implements OnInit {

  sacrieur = new Sacrieur()

  constructor(private damagecalculatorService: DamageCalculatorService) {
  }

  ngOnInit() {
  }

  calculDegatBase(degat: number, type: string): number {
    return this.damagecalculatorService.calculDegatBase(degat, type)
  }

  calculDegatCritique(degat: number, type: string): number {
    return this.damagecalculatorService.calculDegatCritique(degat, type)
  }

}
