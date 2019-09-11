import {ComponentFixture, TestBed} from '@angular/core/testing'

import {Characteristique4Component} from './characteristique4.component'
import {FormsModule} from '@angular/forms'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'

describe('Characteristique4Component', () => {
  let component: Characteristique4Component
  let fixture: ComponentFixture<Characteristique4Component>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [Characteristique4Component],
      providers: [CharacteristiqueService]
    })
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(Characteristique4Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    const attributeToTest = [
      {stat: 'resistanceNeutre', expected: 0},
      {stat: 'resistanceTerre', expected: 0},
      {stat: 'resistanceFeu', expected: 0},
      {stat: 'resistanceEau', expected: 0},
      {stat: 'resistanceAir', expected: 0},
      {stat: 'resistanceFixeNeutre', expected: 0},
      {stat: 'resistanceFixeTerre', expected: 0},
      {stat: 'resistanceFixeFeu', expected: 0},
      {stat: 'resistanceFixeEau', expected: 0},
      {stat: 'resistanceFixeAir', expected: 0},
      {stat: 'resistanceCritiques', expected: 0},
      {stat: 'resistancePoussees', expected: 0},
      {stat: 'resistanceDistance', expected: 0},
      {stat: 'resistanceMelee', expected: 0},
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
