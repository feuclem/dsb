import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {CapeComponent} from './cape.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {CapeHttpService} from './cape.http.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('CapeComponent', () => {
  let component: CapeComponent
  let fixture: ComponentFixture<CapeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CapeComponent],
      imports: [RouterTestingModule],
      providers: [CapeHttpService, StuffService,  {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CapeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
