import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {SacrieurComponent} from './sacrieur.component'
import {DamageCalculatorService} from '../damage-calculator.service'
import {DamageCalculatorServiceMock} from '../damage-calculator.service.mock'

describe('SacrieurComponent', () => {
  let component: SacrieurComponent
  let fixture: ComponentFixture<SacrieurComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SacrieurComponent],
      providers: [{provide: DamageCalculatorService, useClass: DamageCalculatorServiceMock}]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SacrieurComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
