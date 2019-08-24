import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {ArmesComponent} from './armes.component'
import {RouterTestingModule} from '@angular/router/testing'
import {ArmesHttpService} from './armes.http.service'
import {StuffService} from '../../shared/service/stuff.service'
import {StatistiquesService} from '../../shared/service/statistiques.service'
import {StatistiquesServiceMock} from '../../shared/service/statistiques.service.mock'

describe('ArmesComponent', () => {
  let component: ArmesComponent
  let fixture: ComponentFixture<ArmesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArmesComponent],
      imports: [RouterTestingModule],
      providers: [ArmesHttpService, StuffService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
