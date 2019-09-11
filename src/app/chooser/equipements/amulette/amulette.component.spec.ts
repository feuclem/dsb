import {ComponentFixture, TestBed} from '@angular/core/testing'

import {AmuletteComponent} from './amulette.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {AmuletteHttpService} from './amulette.http.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('AmuletteComponent', () => {
  let component: AmuletteComponent
  let fixture: ComponentFixture<AmuletteComponent>

  let amuletteHttpService = null
  let stuffService = null
  let statistiquesService = null

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmuletteComponent],
      imports: [RouterTestingModule],
      providers: [AmuletteHttpService, StuffService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })

    amuletteHttpService = TestBed.get(AmuletteHttpService)
    stuffService = TestBed.get(StuffService)
    statistiquesService = TestBed.get(StatistiquesService)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AmuletteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('setBuild', () => {
  })

  describe('setPanoplie', () => {
  })
})
