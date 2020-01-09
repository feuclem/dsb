import {Component, OnInit} from '@angular/core'
import {DamageCalculatorService} from '../builder/damage-calculator.service'
import {Classe} from '../shared/entities/classe/Classe'

@Component({
  selector: 'dsb-spell',
  templateUrl: './spell.component.html',
  styles: ['.customizedMarginTop { margin-top: 25px }']
})
export class SpellComponent implements OnInit {

  classe: Classe

  damageCalculatorService: DamageCalculatorService

  constructor(damageCalculatorService: DamageCalculatorService) {
    this.damageCalculatorService = damageCalculatorService
  }

  ngOnInit() {}

  calculDegatBase(degat: number, type: string): number {
    return this.damageCalculatorService.calculDegatBase(degat, type)
  }

  calculDegatCritique(degat: number, type: string): number {
    return this.damageCalculatorService.calculDegatCritique(degat, type)
  }

}
