import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {PanoplieBonusComponent} from './panoplie-bonus.component'
import {StuffService} from '../../shared/service/stuff.service'
import {StatistiquesService} from '../../shared/service/statistiques.service'
import {PanoplieService} from '../../shared/service/panoplie.service'
import {CharacteritiqueService} from '../../shared/service/characteritique.service'
import {Statistique} from '../../shared/entities/Statistique'

describe('PanoplieBonusComponent', () => {
  let component: PanoplieBonusComponent
  let fixture: ComponentFixture<PanoplieBonusComponent>

  let stuffService = null
  let statistiquesService = null
  let panoplieService = null

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanoplieBonusComponent],
      providers: [StuffService, StatistiquesService, PanoplieService, CharacteritiqueService]
    })
      .compileComponents()

    stuffService = TestBed.get(StuffService)
    statistiquesService = TestBed.get(StatistiquesService)
    panoplieService = TestBed.get(PanoplieService)
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoplieBonusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('on init', () => {
    it('should set getBonusStatsToAdd', () => {
      // When
      component.ngOnInit()

      // Then
      expect(component.getBonusStatsToAdd).toEqual([])
    })

    describe('when getBonusStatsToAdd has element', () => {
      it('should call statistiquesService any time', () => {
        // Given
        const stat = new Statistique(1, 1, 'fakeLabel')
        component.getBonusStatsToAdd = [stat]
        spyOn(statistiquesService, 'setStatInStuff')

        // When
        component.ngOnInit()

        // Then
        expect(statistiquesService.setStatInStuff).toHaveBeenCalledWith(stat)
      })
    })

    describe('when getBonusStatsToAdd has element', () => {
      it('should call statistiquesService any time', () => {
        // Given
        const stat = new Statistique(1, 1, 'fakeLabel')
        component.getBonusStatsToAdd = [stat]
        spyOn(stuffService, 'resetListIdEquipment')

        // When
        component.ngOnInit()

        // Then
        expect(stuffService.resetListIdEquipment).toHaveBeenCalledWith(stat)
      })
    })
  })
})
