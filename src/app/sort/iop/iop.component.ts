import {Component, OnInit} from '@angular/core'
import {DamageCalculatorService} from '../../builder/damage-calculator.service'
import {Iop} from '../../shared/entities/classe/Iop'

@Component({
  selector: 'dsb-iop',
  templateUrl: './iop.component.html',
  styles: ['.classe { margin-top: 25px }']
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
