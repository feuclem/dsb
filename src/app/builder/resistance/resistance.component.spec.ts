import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {ResistanceComponent} from './resistance.component'
import {CharacteritiqueService} from '../../shared/service/characteritique.service'

describe('ResistanceComponent', () => {
  let component: ResistanceComponent
  let fixture: ComponentFixture<ResistanceComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResistanceComponent],
      providers: [CharacteritiqueService]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistanceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    const attributeToTest = [
      'resistanceTerre',
      'resistanceFeu',
      'resistanceEau',
      'resistanceAir',
      'resistanceFixeTerre',
      'resistanceFixeFeu',
      'resistanceFixeEau',
      'resistanceFixeAir',
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
