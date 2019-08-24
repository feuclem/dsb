import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {BottesComponent} from './bottes.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {BottesHttpService} from './bottes.http.service'

describe('EquipementsComponent', () => {
  let component: BottesComponent
  let fixture: ComponentFixture<BottesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BottesComponent],
      imports: [RouterTestingModule],
      providers: [BottesHttpService, StuffService, StatistiquesService]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BottesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
