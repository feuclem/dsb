import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {CeintureComponent} from './ceinture.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {CeintureHttpService} from './ceinture.http.service'

describe('EquipementsComponent', () => {
  let component: CeintureComponent
  let fixture: ComponentFixture<CeintureComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CeintureComponent],
      imports: [RouterTestingModule],
      providers: [CeintureHttpService, StuffService, StatistiquesService]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CeintureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
