import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {SacrieurComponent} from './sacrieur.component'
import {DamageCalculatorService} from '../damage-calculator.service'
import {DamageCalculatorServiceMock} from '../damage-calculator.service.mock'

describe('SacrieurComponent', () => {
  let component: SacrieurComponent
  let fixture: ComponentFixture<SacrieurComponent>
  let damageCalculatorService = null

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SacrieurComponent],
      providers: [{provide: DamageCalculatorService, useClass: DamageCalculatorServiceMock}]
    })

    damageCalculatorService = TestBed.get(DamageCalculatorService)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SacrieurComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('calculDegatBase', () => {
    it('should call calculDegatBase from damageCalculatorService', () => {
      // Given
      spyOn(damageCalculatorService, 'calculDegatBase').and.returnValues(1)

      // When
      component.calculDegatBase(1, 'fakeType')

      // Then
      expect(damageCalculatorService.calculDegatBase).toHaveBeenCalledWith(1, 'fakeType')
    })
  })

  describe('calculDegatCritique', () => {
    it('should call calculDegatCritique from damageCalculatorService', () => {
      // Given
      spyOn(damageCalculatorService, 'calculDegatCritique').and.returnValues(1)

      // When
      component.calculDegatCritique(1, 'fakeType')

      // Then
      expect(damageCalculatorService.calculDegatCritique).toHaveBeenCalledWith(1, 'fakeType')
    })
  })
})
