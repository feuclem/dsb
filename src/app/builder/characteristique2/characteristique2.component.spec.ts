import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {CharacteristiqueService} from '../../shared/service/characteristique.service'
import {FormsModule} from '@angular/forms'
import {PointsdecaracService} from '../../shared/service/pointsdecarac.service'
import {Characteristique2Component} from './characteristique2.component'

describe('Characteristique2Component', () => {
  let component: Characteristique2Component
  let fixture: ComponentFixture<Characteristique2Component>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [Characteristique2Component],
      providers: [CharacteristiqueService]
    })
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(Characteristique2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    const attributeToTest = [
      {stat: 'dommages', expected: 0},
      {stat: 'dommagesNeutre', expected: 0},
      {stat: 'dommagesTerre', expected: 0},
      {stat: 'dommagesFeu', expected: 0},
      {stat: 'dommagesEau', expected: 0},
      {stat: 'dommagesAir', expected: 0},
      {stat: 'dommagesMelee', expected: 0},
      {stat: 'dommagesDistance', expected: 0},
      {stat: 'dommagesAuxSorts', expected: 0},
      {stat: 'dommagesCritiques', expected: 0},
      {stat: 'dommagesPoussee', expected: 0},
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
