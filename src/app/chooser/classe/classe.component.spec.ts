import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {ClasseComponent} from './classe.component'
import {ClasseService} from './classe.service'

describe('ClasseComponent', () => {
  let component: ClasseComponent
  let fixture: ComponentFixture<ClasseComponent>

  let classeService = null

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClasseComponent],
      providers: [ClasseService]
    })

    classeService = TestBed.get(ClasseService)
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    it('should set value', () => {
      expect(component.classes).toEqual([
          'Iop',
          'Sacrieur'
        ]
      )
      expect(component.currentClasse).toEqual('')
    })
  })

  describe('selectClasse', () => {
    it('should set current classe with the given data', () => {
      // When
      component.selectClasse('fakeClasse')

      // Then
      expect(component.currentClasse).toEqual('fakeClasse')
    })

    it('should call niveau servivce with the given data', () => {
      // Given
      const spy = spyOn(classeService, 'updateClasse')

      // When
      component.selectClasse('fakeClasse')

      // Then
      expect(spy).toHaveBeenCalledWith('fakeClasse')
    })
  })
})
