import {TestBed} from '@angular/core/testing'

import {DamageCalculatorService} from './damage-calculator.service'
import {Sorts} from '../shared/entities/Sorts'
import {CharacteritiqueService} from '../shared/characteritique.service'

describe('DamageCalculatorService', () => {
  let damageCalculatorService = null
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DamageCalculatorService, CharacteritiqueService]
    })

    damageCalculatorService = TestBed.get(DamageCalculatorService)
  })

  describe('calculDegatBase', () => {
    const elementToTest = [
      'terre',
      'feu',
      'eau',
      'air',
      'air-feu'
    ]
    elementToTest.forEach(item => {
      describe(`when type is ${item}`, () => {
        it(`should return call Sorts.calcul with ${item}damage`, () => {
          // Given
          spyOn(Sorts, 'calcul')

          // When
          damageCalculatorService.calculDegatBase(1, item)

          // Then
          expect(Sorts.calcul).toHaveBeenCalledWith(1, 0, 0, 0, 0, 0, 0, 0, 0)
        })
      })
    })
  })

  describe('calculDegatCritique', () => {
    const elementToTest = [
      'terre',
      'feu',
      'eau',
      'air',
      'air-feu'
    ]
    elementToTest.forEach(item => {
      describe(`when type is ${item}`, () => {
        it(`should return call Sorts.calcul with ${item}damage`, () => {
          // Given
          spyOn(Sorts, 'calcul')

          // When
          damageCalculatorService.calculDegatCritique(1, item)

          // Then
          expect(Sorts.calcul).toHaveBeenCalledWith(1, 0, 0, 0, 0, 0, 0, 0, 0)
        })
      })
    })
  })
})
