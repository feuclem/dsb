import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {NiveauComponent} from './niveau.component'
import {NiveauService} from './niveau.service'

describe('NiveauComponent', () => {
  let component: NiveauComponent
  let fixture: ComponentFixture<NiveauComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NiveauComponent],
      providers: [NiveauService]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
