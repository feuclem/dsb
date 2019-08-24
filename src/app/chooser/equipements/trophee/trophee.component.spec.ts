import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {TropheeComponent} from './trophee.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {TropheeHttpService} from './trophee.http.service'

describe('EquipementsComponent', () => {
  let component: TropheeComponent
  let fixture: ComponentFixture<TropheeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TropheeComponent],
      imports: [RouterTestingModule],
      providers: [TropheeHttpService, StuffService, StatistiquesService]
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
