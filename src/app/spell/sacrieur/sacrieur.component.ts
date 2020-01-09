import {Component, OnInit} from '@angular/core'
import {DamageCalculatorService} from '../../builder/damage-calculator.service'
import {SpellComponent} from '../spell.component'
import {Sacrieur} from '../../shared/entities/classe/Sacrieur'

@Component({
  selector: 'dsb-sacrieur',
  templateUrl: '../spell.component.html',
  styles: ['.customizedMarginTop { margin-top: 25px }']
})
export class SacrieurComponent extends SpellComponent implements OnInit {

  constructor(damageCalculatorService: DamageCalculatorService) {
    super(damageCalculatorService)
  }

  ngOnInit() {
    this.classe = new Sacrieur()
    super.ngOnInit()
  }
}
