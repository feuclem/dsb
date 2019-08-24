import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {BouclierComponent} from './bouclier.component'
import {RouterTestingModule} from '@angular/router/testing'
import {StuffService} from '../../../shared/service/stuff.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {BouclierHttpService} from './bouclier.http.service'

describe('EquipementsComponent', () => {
  let component: BouclierComponent
  let fixture: ComponentFixture<BouclierComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BouclierComponent],
      imports: [RouterTestingModule],
      providers: [BouclierHttpService, StuffService, StatistiquesService]
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
