import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {BouclierComponent} from './bouclier.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {BouclierHttpService} from './bouclier.http.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('BouclierComponent', () => {
  let component: BouclierComponent
  let fixture: ComponentFixture<BouclierComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BouclierComponent],
      imports: [RouterTestingModule],
      providers: [BouclierHttpService, StuffService,  {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BouclierComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
