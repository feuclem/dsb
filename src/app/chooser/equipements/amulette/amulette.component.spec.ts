import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {AmuletteComponent} from './amulette.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {AmuletteHttpService} from './amulette.http.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('AmuletteComponent', () => {
  let component: AmuletteComponent
  let fixture: ComponentFixture<AmuletteComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmuletteComponent],
      imports: [RouterTestingModule],
      providers: [AmuletteHttpService, StuffService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AmuletteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
