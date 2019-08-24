import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {TropheeComponent} from './trophee.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {TropheeHttpService} from './trophee.http.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('TropheeComponent', () => {
  let component: TropheeComponent
  let fixture: ComponentFixture<TropheeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TropheeComponent],
      imports: [RouterTestingModule],
      providers: [TropheeHttpService, StuffService,  {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TropheeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
