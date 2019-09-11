import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {PanoplieBonusComponent} from './panoplie-bonus.component'
import {StuffService} from '../../shared/service/stuff.service'
import {StatistiquesService} from '../../shared/service/statistiques.service'
import {PanoplieService} from '../../shared/service/panoplie.service'
import {DommagesCritiques, Puissance, Vitalite} from '../../shared/entities/Statistique'
import {StatistiquesServiceMock} from '../../shared/service/statistiques.service.mock'

describe('PanoplieBonusComponent', () => {
  let component: PanoplieBonusComponent
  let fixture: ComponentFixture<PanoplieBonusComponent>

  let stuffService = null
  let statistiquesService = null
  let panoplieService = null

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanoplieBonusComponent],
      providers: [StuffService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}, PanoplieService]
    })
      .compileComponents()

    stuffService = TestBed.get(StuffService)
    statistiquesService = TestBed.get(StatistiquesService)
    panoplieService = TestBed.get(PanoplieService)
  })

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
        spyOn(panoplieService, 'getPanoplieBonus').and.returnValues([
            new Vitalite(100, 100),
            new Puissance(50, 50),
            new DommagesCritiques(20, 20)
          ]
        )
        spyOn(statistiquesService, 'setStatInStuff')

        // When
        component.ngOnInit()

        // Then
        expect(statistiquesService.setStatInStuff).toHaveBeenCalledTimes(3)
        expect(statistiquesService.setStatInStuff).toHaveBeenCalledWith(new Vitalite(100, 100))
        expect(statistiquesService.setStatInStuff).toHaveBeenCalledWith(new Puissance(50, 50))
        expect(statistiquesService.setStatInStuff).toHaveBeenCalledWith(new Vitalite(100, 100))
      })
    })
  })
})
