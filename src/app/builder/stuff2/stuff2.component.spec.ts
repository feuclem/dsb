import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {Stuff2Component} from './stuff2.component'
import {StuffService} from '../../shared/stuff.service'

describe('Stuff2Component', () => {
  let component: Stuff2Component
  let fixture: ComponentFixture<Stuff2Component>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Stuff2Component],
      providers: [StuffService]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(Stuff2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    const attributeToTest = [
      'slot1',
      'slot2',
      'slot3',
      'slot4',
      'slot5',
      'slot6',
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
