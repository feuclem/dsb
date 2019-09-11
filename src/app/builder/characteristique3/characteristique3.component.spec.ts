import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {Characteristique3Component} from './characteristique3.component'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'

describe('Characteristique3Component', () => {
  let component: Characteristique3Component
  let fixture: ComponentFixture<Characteristique3Component>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Characteristique3Component],
      providers: [CharacteristiqueService]
    })
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(Characteristique3Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    const attributeToTest = [
      {stat: 'fuite', expected: 0},
      {stat: 'tacle', expected: 0},
      {stat: 'esquivePa', expected: 0},
      {stat: 'esquivePm', expected: 0},
      {stat: 'retraitPa', expected: 0},
      {stat: 'retraitPm', expected: 0},
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
})
