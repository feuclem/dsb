import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {Stuff1Component} from './stuff1.component'
import {StuffService} from '../../shared/stuff.service'

describe('Stuff1Component', () => {
  let component: Stuff1Component
  let fixture: ComponentFixture<Stuff1Component>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Stuff1Component],
      providers: [StuffService]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(Stuff1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    const attributeToTest = [
      'arme',
      'amulette',
      'anneau1',
      'anneau2',
      'ceinture',
      'cape',
      'coiffe',
      'bottes',
      'familier',
      'monture',
      'bouclier',
    ]
    attributeToTest.forEach(item => {
      it(`should should set ${item}with the given service value`, () => {
        // When
        component.ngOnInit()

        // Then
        expect(component[item]).toEqual('')
      })
    })
  })
})
