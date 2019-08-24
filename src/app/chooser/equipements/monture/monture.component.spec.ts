import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {MontureComponent} from './monture.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {MontureHttpService} from './monture.http.service'

describe('EquipementsComponent', () => {
  let component: MontureComponent
  let fixture: ComponentFixture<MontureComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MontureComponent],
      imports: [RouterTestingModule],
      providers: [MontureHttpService, StuffService, StatistiquesService]
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
