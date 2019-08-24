import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {NiveauComponent} from './niveau.component'
import {NiveauService} from './niveau.service'

describe('NiveauComponent', () => {
  let component: NiveauComponent
  let fixture: ComponentFixture<NiveauComponent>

  let niveauService = null

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NiveauComponent],
      providers: [NiveauService]
    })

    niveauService = TestBed.get(NiveauService)
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    it('should create array of 200 integers, start 1, end 200', () => {
      expect(component.niveaus.length).toEqual(200)
      expect(component.niveaus[0]).toEqual(200)
      expect(component.niveaus[199]).toEqual(1)
    })

    it('should set current niveau by default to 200', () => {
      expect(component.currentNiveau).toEqual(200)
    })
  })

  describe('selectNiveau', () => {
    it('should set current niveau with the given data', () => {
      // When
      component.selectNiveau(1)

      // Then
      expect(component.currentNiveau).toEqual(1)
    })

    it('should call niveau servivce with the given data', () => {
      // Given
      const spy = spyOn(niveauService, 'updateNiveau')

      // When
      component.selectNiveau(1)

      // Then
      expect(spy).toHaveBeenCalledWith(1)
    })
  })
})
