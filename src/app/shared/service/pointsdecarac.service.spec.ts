import {TestBed} from '@angular/core/testing'

import {PointsdecaracService} from './pointsdecarac.service'
import {CharacteristiqueService} from './characteristique.service'

describe('PointsdecaracService', () => {
  let pointsdecaracService = null
  let characteristiqueService = null
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointsdecaracService, CharacteristiqueService]
    })

    pointsdecaracService = TestBed.get(PointsdecaracService)
    characteristiqueService = TestBed.get(CharacteristiqueService)
  })

  describe('addPointToCharacteristique', () => {
    describe('when 100 force', () => {
      it('should call force of CharacteritiqueService and should set remainingPoints to 895', () => {
        // Given
        const spyForce = spyOn(characteristiqueService, 'updateForce')
        const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

        // When
        pointsdecaracService.addPointToCharacteristique(100, 'Force')

        // Then
        expect(spyForce).toHaveBeenCalledWith(100)
        expect(spyUpdate).toHaveBeenCalledWith(895)
      })
    })

    describe('when 101 force', () => {
      it('should call force of CharacteritiqueService and should set remainingPoints to 893', () => {
        // Given
        const spyForce = spyOn(characteristiqueService, 'updateForce')
        const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

        // When
        pointsdecaracService.addPointToCharacteristique(101, 'Force')

        // Then
        expect(spyForce).toHaveBeenCalledWith(101)
        expect(spyUpdate).toHaveBeenCalledWith(893)
      })
    })

    describe('when 111 force', () => {
      it('should call force of CharacteritiqueService and should set remainingPoints to 873', () => {
        // Given
        const spyForce = spyOn(characteristiqueService, 'updateForce')
        const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

        // When
        pointsdecaracService.addPointToCharacteristique(111, 'Force')

        // Then
        expect(spyForce).toHaveBeenCalledWith(111)
        expect(spyUpdate).toHaveBeenCalledWith(873)
      })
    })

    describe('when 199 force', () => {
      it('should call force of CharacteritiqueService and should set remainingPoints to 895', () => {
        // Given
        const spyForce = spyOn(characteristiqueService, 'updateForce')
        const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

        // When
        pointsdecaracService.addPointToCharacteristique(199, 'Force')

        // Then
        expect(spyForce).toHaveBeenCalledWith(199)
        expect(spyUpdate).toHaveBeenCalledWith(697)
      })
    })

    describe('when 200 force', () => {
      it('should call force of CharacteritiqueService and should set remainingPoints to 695', () => {
        // Given
        const spyForce = spyOn(characteristiqueService, 'updateForce')
        const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

        // When
        pointsdecaracService.addPointToCharacteristique(200, 'Force')

        // Then
        expect(spyForce).toHaveBeenCalledWith(200)
        expect(spyUpdate).toHaveBeenCalledWith(695)
      })
    })

    describe('when 201 force', () => {
      it('should call force of CharacteritiqueService and should set remainingPoints to 692', () => {
        // Given
        const spyForce = spyOn(characteristiqueService, 'updateForce')
        const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

        // When
        pointsdecaracService.addPointToCharacteristique(201, 'Force')

        // Then
        expect(spyForce).toHaveBeenCalledWith(201)
        expect(spyUpdate).toHaveBeenCalledWith(692)
      })
    })

    describe('when 300 force', () => {
      it('should call force of CharacteritiqueService and should set remainingPoints to 395', () => {
        // Given
        const spyForce = spyOn(characteristiqueService, 'updateForce')
        const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

        // When
        pointsdecaracService.addPointToCharacteristique(300, 'Force')

        // Then
        expect(spyForce).toHaveBeenCalledWith(300)
        expect(spyUpdate).toHaveBeenCalledWith(395)
      })
    })

    describe('when 301 force', () => {
      it('should call force of CharacteritiqueService and should set remainingPoints to 391', () => {
        // Given
        const spyForce = spyOn(characteristiqueService, 'updateForce')
        const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

        // When
        pointsdecaracService.addPointToCharacteristique(301, 'Force')

        // Then
        expect(spyForce).toHaveBeenCalledWith(301)
        expect(spyUpdate).toHaveBeenCalledWith(391)
      })
    })

    describe('when 350 force', () => {
      it('should call force of CharacteritiqueService and should set remainingPoints to 195', () => {
        // Given
        const spyForce = spyOn(characteristiqueService, 'updateForce')
        const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

        // When
        pointsdecaracService.addPointToCharacteristique(350, 'Force')

        // Then
        expect(spyForce).toHaveBeenCalledWith(350)
        expect(spyUpdate).toHaveBeenCalledWith(195)
      })
    })

    describe('when 398 force', () => {
      it('should call force of CharacteritiqueService and should set remainingPoints to 3', () => {
        // Given
        const spyForce = spyOn(characteristiqueService, 'updateForce')
        const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

        // When
        pointsdecaracService.addPointToCharacteristique(398, 'Force')

        // Then
        expect(spyForce).toHaveBeenCalledWith(398)
        expect(spyUpdate).toHaveBeenCalledWith(3)
      })
    })

    describe('limit case', () => {
      describe('when remainingPoints is 95 and points is 95', () => {
        it('should call vitalite of CharacteritiqueService and should set remainingPoints to 0', () => {
          // Given
          pointsdecaracService.remainingPoints = 95
          const spyVitalite = spyOn(characteristiqueService, 'updateVitalite')
          const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

          // When
          pointsdecaracService.addPointToCharacteristique(95, 'Vitalite')

          // Then
          expect(spyVitalite).toHaveBeenCalledWith(95)
          expect(spyUpdate).toHaveBeenCalledWith(0)
        })
      })

      describe('when remainingPoints is 95 and points is 300', () => {
        it('should call vitalite of CharacteritiqueService with the remaining points', () => {
          // Given
          pointsdecaracService.remainingPoints = 95
          const spyVitalite = spyOn(characteristiqueService, 'updateVitalite')
          const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

          // When
          pointsdecaracService.addPointToCharacteristique(300, 'Vitalite')

          // Then
          expect(spyVitalite).toHaveBeenCalledWith(95)
          expect(spyUpdate).toHaveBeenCalledWith(0)
        })
      })

      describe('when remainingPoints is 0 or inferior', () => {
        it('should not call anything', () => {
          // Given
          pointsdecaracService.remainingPoints = 0
          const spyVitalite = spyOn(characteristiqueService, 'updateVitalite')
          const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

          // When
          pointsdecaracService.addPointToCharacteristique(1000, 'Vitalite')

          // Then
          expect(spyVitalite).not.toHaveBeenCalled()
          expect(spyUpdate).not.toHaveBeenCalled()
        })
      })

      describe('when points is superior to 398', () => {
        it('should call force of CharacteritiqueService and should set remainingPoints to 3', () => {
          // Given
          const spyForce = spyOn(characteristiqueService, 'updateForce')
          const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

          // When
          pointsdecaracService.addPointToCharacteristique(1111, 'Force')

          // Then
          expect(spyForce).toHaveBeenCalledWith(398)
          expect(spyUpdate).toHaveBeenCalledWith(3)
        })
      })
    })

    describe('use case test', () => {
      it('should set correctly the points to used', () => {
        // Given
        const spyForce = spyOn(characteristiqueService, 'updateForce')
        const spyIntel = spyOn(characteristiqueService, 'updateIntelligence')
        const spyVita = spyOn(characteristiqueService, 'updateVitalite')
        const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

        // When user add 300 force
        pointsdecaracService.addPointToCharacteristique(300, 'Force')

        // Then the points to used is 395
        expect(spyForce).toHaveBeenCalledWith(300)
        expect(spyUpdate).toHaveBeenCalledWith(395)

        // When user add 200 intel
        pointsdecaracService.addPointToCharacteristique(200, 'Intelligence')

        // Then
        expect(spyIntel).toHaveBeenCalledWith(200)
        expect(spyUpdate).toHaveBeenCalledWith(95)

        // When user add 95 vita
        pointsdecaracService.addPointToCharacteristique(95, 'Vitalite')

        // Then
        expect(spyVita).toHaveBeenCalledWith(95)
        expect(spyUpdate).toHaveBeenCalledWith(0)
      })
    })
  })

  describe('resetRemainingPoints', () => {
    it('should set remainingPoints to 995 and call all charac with 100', () => {
      // Given
      const spyForce = spyOn(characteristiqueService, 'resetForce')
      const spyIntelligence = spyOn(characteristiqueService, 'resetIntelligence')
      const spyChance = spyOn(characteristiqueService, 'resetChance')
      const spyAgilite = spyOn(characteristiqueService, 'resetAgilite')
      const spyVitalite = spyOn(characteristiqueService, 'resetVitalite')
      const spyUpdate = spyOn(pointsdecaracService, 'updateRemainingPointsToUsed')

      // When
      pointsdecaracService.resetRemainingPoints()

      // Then
      expect(spyForce).toHaveBeenCalledWith()
      expect(spyIntelligence).toHaveBeenCalledWith()
      expect(spyChance).toHaveBeenCalledWith()
      expect(spyAgilite).toHaveBeenCalledWith()
      expect(spyVitalite).toHaveBeenCalledWith()
      expect(spyUpdate).toHaveBeenCalledWith(995)
    })
  })
})
