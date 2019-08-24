import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {MontureComponent} from './monture.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {MontureHttpService} from './monture.http.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('MontureComponent', () => {
  let component: MontureComponent
  let fixture: ComponentFixture<MontureComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MontureComponent],
      imports: [RouterTestingModule],
      providers: [MontureHttpService, StuffService,  {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MontureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
