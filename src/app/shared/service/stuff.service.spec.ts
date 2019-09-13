import {TestBed} from '@angular/core/testing'

import {StuffService} from './stuff.service'
import {StuffEquipementId} from '../entities/StuffEquipementId'

describe('StuffService', () => {
  let stuffService = null
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StuffService]
    })

    stuffService = TestBed.get(StuffService)
  })

  describe('set listStuffEquipmentId', () => {
    describe('when no equipement is selected', () => {
      it('should set listStuffEquipmentId with the given data', () => {
        // When
        stuffService.listStuffEquipmentId = [new StuffEquipementId(1, 'Amulette')]

        // Then
        expect(stuffService.listStuffEquipmentId).toEqual([new StuffEquipementId(1, 'Amulette')])
      })
    })

    describe('when amulette is selected', () => {
      it('should set listStuffEquipmentId with the coiffe', () => {
        // Then
        stuffService.listStuffEquipmentId = [new StuffEquipementId(1, 'Amulette')]

        // When
        stuffService.listStuffEquipmentId = [new StuffEquipementId(2, 'Coiffe')]

        // Then
        expect(stuffService.listStuffEquipmentId).toEqual([new StuffEquipementId(1, 'Amulette'), new StuffEquipementId(2, 'Coiffe')])
      })
    })

    describe('when amulette is selected', () => {
      it('should set listStuffEquipmentId with the new amulette', () => {
        // Then
        stuffService.listStuffEquipmentId = [new StuffEquipementId(1, 'Amulette')]

        // When
        stuffService.listStuffEquipmentId = [new StuffEquipementId(2, 'Amulette')]

        // Then
        expect(stuffService.listStuffEquipmentId).toEqual([new StuffEquipementId(2, 'Amulette')])
      })
    })

    describe('when anneau is selected', () => {
      it('should set listStuffEquipmentId with the new anneau', () => {
        // Then
        stuffService.listStuffEquipmentId = [new StuffEquipementId(1, 'Anneau')]

        // When
        stuffService.listStuffEquipmentId = [new StuffEquipementId(2, 'Anneau')]

        // Then
        expect(stuffService.listStuffEquipmentId).toEqual([new StuffEquipementId(1, 'Anneau'), new StuffEquipementId(2, 'Anneau')])
      })
    })

    describe('when two anneaux is selected', () => {
      it('should set listStuffEquipmentId with the new anneau', () => {
        // Then
        stuffService.listStuffEquipmentId = [new StuffEquipementId(1, 'Anneau'), new StuffEquipementId(2, 'Anneau')]

        // When
        stuffService.listStuffEquipmentId = [new StuffEquipementId(3, 'Anneau')]

        // Then
        expect(stuffService.listStuffEquipmentId).toEqual([new StuffEquipementId(2, 'Anneau'), new StuffEquipementId(3, 'Anneau')])
      })
    })
  })
})
