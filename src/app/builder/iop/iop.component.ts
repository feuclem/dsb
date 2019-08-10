import {Component, OnInit} from '@angular/core'
import {DamageCalculatorService} from '../damage-calculator.service'
import {Iop} from '../../shared/entities/Iop'

@Component({
  selector: 'dsb-iop',
  templateUrl: './iop.component.html',
  styles: []
})
export class IopComponent implements OnInit {

  iop = new Iop()

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
