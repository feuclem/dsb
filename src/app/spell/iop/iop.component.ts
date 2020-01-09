import {Component, OnInit} from '@angular/core'
import {DamageCalculatorService} from '../../builder/damage-calculator.service'
import {Iop} from '../../shared/entities/classe/Iop'
import {SpellComponent} from '../spell.component'

@Component({
  selector: 'dsb-iop',
  templateUrl: '../spell.component.html',
  styles: ['.customizedMarginTop { margin-top: 25px }'] // TODO CLEM pourquoi ?
})
export class IopComponent extends SpellComponent implements OnInit {

  constructor(damageCalculatorService: DamageCalculatorService) {
    super(damageCalculatorService)
  }

  ngOnInit() {
    this.classe = new Iop()
    super.ngOnInit()
  }

}
