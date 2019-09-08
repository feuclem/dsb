import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {Characteristique2Component} from './characteristique2.component'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'

describe('Characteristique2Component', () => {
  let component: Characteristique2Component
  let fixture: ComponentFixture<Characteristique2Component>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Characteristique2Component],
      providers: [CharacteristiqueService]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(Characteristique2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    const attributeToTest = [
      'dommages',
      'dommagesTerre',
      'dommagesFeu',
      'dommagesEau',
      'dommagesAir',
      'dommagesCritiques',
      'dommagesMelee',
      'dommagesDistance',
      'dommagesAuxSorts',
    ]
    attributeToTest.forEach(item => {
      it(`should should set ${item}with the given service value`, () => {
        // When
        component.ngOnInit()

        // Then
        expect(component[item]).toEqual(0)
      })
    })
  })
})
