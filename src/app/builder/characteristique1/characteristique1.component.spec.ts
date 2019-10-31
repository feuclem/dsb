import {ComponentFixture, TestBed} from '@angular/core/testing'

import {Characteristique1Component} from './characteristique1.component'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'
import {PointsdecaracService} from '../../shared/service/pointsdecarac.service'
import {FormsModule} from '@angular/forms'

describe('Characteristique1Component', () => {
  let component: Characteristique1Component
  let fixture: ComponentFixture<Characteristique1Component>
  let pointsdecaracService = null

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [Characteristique1Component],
      providers: [CharacteristiqueService, PointsdecaracService]
    })
    pointsdecaracService = TestBed.get(PointsdecaracService)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(Characteristique1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    const attributeToTest = [
      {stat: 'pa', expected: 7},
      {stat: 'pm', expected: 3},
      {stat: 'po', expected: 1},
      {stat: 'initiative', expected: 0},
      {stat: 'invocation', expected: 1},
      {stat: 'critique', expected: 0},
      {stat: 'soin', expected: 0},
      {stat: 'prospection', expected: 0},
      {stat: 'force', expected: 100},
      {stat: 'intelligence', expected: 100},
      {stat: 'chance', expected: 100},
      {stat: 'agilite', expected: 100},
      {stat: 'vitalite', expected: 100},
      {stat: 'parchoForce', expected: 100},
      {stat: 'parchoIntelligence', expected: 100},
      {stat: 'parchoChance', expected: 100},
      {stat: 'parchoAgilite', expected: 100},
      {stat: 'parchoVitalite', expected: 100},
      {stat: 'puissance', expected: 0},
    ]
    attributeToTest.forEach(item => {
      it(`should should set ${item.stat} with the given service value`, () => {
        // When
        component.ngOnInit()

        // Then
        expect(component[item.stat]).toEqual(item.expected)
      })
    })
  })

  describe('modifyStat', () => {
    describe('when hasRemainingPointsAvailable is true', () => {
      it('should call addPointToCharacteristique with the given value', () => {
        spyOn(pointsdecaracService, 'hasRemainingPointsAvailable').and.returnValue(true)
        // Given
        const spy = spyOn(pointsdecaracService, 'addPointToCharacteristique')

        // When
        component.modifyStat(1, 'fake')

        // Then
        expect(spy).toHaveBeenCalledWith(1, 'fake')
      })
    })

    describe('when hasRemainingPointsAvailable is false', () => {
      it('should an alert', () => {
        spyOn(pointsdecaracService, 'hasRemainingPointsAvailable').and.returnValue(true)
        // Given
        const spy = spyOn(window, 'alert')

        // When
        component.modifyStat(1, 'fake')

        // Then
        expect(spy).toHaveBeenCalledWith('Vous ne pouvez plus ajouter de points de caractéristiques.')
      })
    })
  })

  describe('resetStats', () => {
    it('should set input to 0 and call resetRemainingPoints', () => {
      // Given
      const spy = spyOn(pointsdecaracService, 'resetRemainingPoints')

      // When
      component.resetStats()

      // Then
      component.inputForce = 0
      component.inputIntelligence = 0
      component.inputChance = 0
      component.inputAgilite = 0
      expect(spy).toHaveBeenCalledWith()
    })
  })
})
