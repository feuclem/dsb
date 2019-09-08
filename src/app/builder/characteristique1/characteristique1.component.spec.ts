import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {Characteristique1Component} from './characteristique1.component'
import {CharacteristiqueService} from '../../shared/service/characteristique.service'

describe('Characteristique1Component', () => {
  let component: Characteristique1Component
  let fixture: ComponentFixture<Characteristique1Component>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Characteristique1Component],
      providers: [CharacteristiqueService]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(Characteristique1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    const attributeToTest = [
      'force',
      'intelligence',
      'chance',
      'agilite',
      'vitalite',
      'puissance',
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
