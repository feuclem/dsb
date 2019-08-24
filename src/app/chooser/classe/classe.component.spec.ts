import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {ClasseComponent} from './classe.component'
import {ClasseService} from './classe.service'

describe('ClasseComponent', () => {
  let component: ClasseComponent
  let fixture: ComponentFixture<ClasseComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClasseComponent],
      providers: [ClasseService]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
