import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {FamilierComponent} from './familier.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {FamilierHttpService} from './familier.http.service'

describe('EquipementsComponent', () => {
  let component: FamilierComponent
  let fixture: ComponentFixture<FamilierComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FamilierComponent],
      imports: [RouterTestingModule],
      providers: [FamilierHttpService, StuffService, StatistiquesService]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilierComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
