import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {DofusComponent} from './dofus.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {DofusHttpService} from './dofus.http.service'

describe('EquipementsComponent', () => {
  let component: DofusComponent
  let fixture: ComponentFixture<DofusComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DofusComponent],
      imports: [RouterTestingModule],
      providers: [DofusHttpService, StuffService, StatistiquesService]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DofusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
