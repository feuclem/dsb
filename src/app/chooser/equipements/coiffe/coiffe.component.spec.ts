import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {CoiffeComponent} from './coiffe.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {CoiffeHttpService} from './coiffe.http.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('CoiffeComponent', () => {
  let component: CoiffeComponent
  let fixture: ComponentFixture<CoiffeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoiffeComponent],
      imports: [RouterTestingModule],
      providers: [CoiffeHttpService, StuffService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CoiffeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
