import {TestBed} from '@angular/core/testing'

import {StatistiquesService} from './statistiques.service'
import {CharacteritiqueService} from './characteritique.service'
import {ResistanceAir, ResistanceEau, ResistanceFeu, ResistanceNeutre, ResistanceTerre} from './entities/Statistique'

describe('StatistiquesService', () => {

  let statistiquesService = null
  let characteritiqueService = null

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatistiquesService, CharacteritiqueService]
    })

    statistiquesService = TestBed.get(StatistiquesService)
    characteritiqueService = TestBed.get(CharacteritiqueService)
  })

  describe('extractor', () => {
    describe('when stat has % Résistance Terre', () => {
      it('should return ResistanceTerre with 1, 2', () => {
        // When
        const result = statistiquesService.extractor({'% Résistance Terre': {'from': '1', 'to': '2'}})

        // Then
        expect(result).toEqual(new ResistanceTerre(1, 2))
      })

      it('should return ResistanceTerre with 1, 3', () => {
        // When
        const result = statistiquesService.extractor({'% Résistance Terre': {'from': '1', 'to': '3'}})

        // Then
        expect(result).toEqual(new ResistanceTerre(1, 3))
      })
    })
    describe('when stat has 1% Résistance Terre', () => {
      it('should return ResistanceTerre with 1, 1', () => {
        // When
        const result = statistiquesService.extractor({'1% Résistance Terre': {'from': '1'}})

        // Then
        expect(result).toEqual(new ResistanceTerre(1, 1))
      })
    })
    describe('when stat has 2% Résistance Terre', () => {
      it('should return ResistanceTerre with 2, 2', () => {
        // When
        const result = statistiquesService.extractor({'2% Résistance Terre': {'from': '2'}})

        // Then
        expect(result).toEqual(new ResistanceTerre(2, 2))
      })
    })

    describe('when stat has % Résistance Feu', () => {
      it('should return ResistanceFeu with 1, 2', () => {
        // When
        const result = statistiquesService.extractor({'% Résistance Feu': {'from': '1', 'to': '2'}})

        // Then
        expect(result).toEqual(new ResistanceFeu(1, 2))
      })

      it('should return ResistanceFeu with 1, 3', () => {
        // When
        const result = statistiquesService.extractor({'% Résistance Feu': {'from': '1', 'to': '3'}})

        // Then
        expect(result).toEqual(new ResistanceFeu(1, 3))
      })
    })
    describe('when stat has 1% Résistance Feu', () => {
      it('should return ResistanceFeu with 1, 1', () => {
        // When
        const result = statistiquesService.extractor({'1% Résistance Feu': {'from': '1'}})

        // Then
        expect(result).toEqual(new ResistanceFeu(1, 1))
      })
    })
    describe('when stat has 2% Résistance Feu', () => {
      it('should return ResistanceFeu with 2, 2', () => {
        // When
        const result = statistiquesService.extractor({'2% Résistance Feu': {'from': '2'}})

        // Then
        expect(result).toEqual(new ResistanceFeu(2, 2))
      })
    })

    describe('when stat has % Résistance Eau', () => {
      it('should return ResistanceEau with 1, 2', () => {
        // When
        const result = statistiquesService.extractor({'% Résistance Eau': {'from': '1', 'to': '2'}})

        // Then
        expect(result).toEqual(new ResistanceEau(1, 2))
      })

      it('should return ResistanceEau with 1, 3', () => {
        // When
        const result = statistiquesService.extractor({'% Résistance Eau': {'from': '1', 'to': '3'}})

        // Then
        expect(result).toEqual(new ResistanceEau(1, 3))
      })
    })
    describe('when stat has 1% Résistance Eau', () => {
      it('should return ResistanceEau with 1, 1', () => {
        // When
        const result = statistiquesService.extractor({'1% Résistance Eau': {'from': '1'}})

        // Then
        expect(result).toEqual(new ResistanceEau(1, 1))
      })
    })
    describe('when stat has 2% Résistance Eau', () => {
      it('should return ResistanceEau with 2, 2', () => {
        // When
        const result = statistiquesService.extractor({'2% Résistance Eau': {'from': '2'}})

        // Then
        expect(result).toEqual(new ResistanceEau(2, 2))
      })
    })

    describe('when stat has % Résistance Air', () => {
      it('should return ResistanceAir with 1, 2', () => {
        // When
        const result = statistiquesService.extractor({'% Résistance Air': {'from': '1', 'to': '2'}})

        // Then
        expect(result).toEqual(new ResistanceAir(1, 2))
      })

      it('should return ResistanceAir with 1, 3', () => {
        // When
        const result = statistiquesService.extractor({'% Résistance Air': {'from': '1', 'to': '3'}})

        // Then
        expect(result).toEqual(new ResistanceAir(1, 3))
      })
    })
    describe('when stat has 1% Résistance Air', () => {
      it('should return ResistanceAir with 1, 1', () => {
        // When
        const result = statistiquesService.extractor({'1% Résistance Air': {'from': '1'}})

        // Then
        expect(result).toEqual(new ResistanceAir(1, 1))
      })
    })
    describe('when stat has 2% Résistance Air', () => {
      it('should return ResistanceAir with 2, 2', () => {
        // When
        const result = statistiquesService.extractor({'2% Résistance Air': {'from': '2'}})

        // Then
        expect(result).toEqual(new ResistanceAir(2, 2))
      })
    })

    describe('when stat has % RésistanceNeutre', () => {
      it('should return RésistanceNeutre with 1, 2', () => {
        // When
        const result = statistiquesService.extractor({'% RésistanceNeutre': {'from': '1', 'to': '2'}})

        // Then
        expect(result).toEqual(new ResistanceNeutre(1, 2))
      })

      it('should return RésistanceNeutre with 1, 3', () => {
        // When
        const result = statistiquesService.extractor({'% RésistanceNeutre': {'from': '1', 'to': '3'}})

        // Then
        expect(result).toEqual(new ResistanceNeutre(1, 3))
      })
    })
    describe('when stat has 1% RésistanceNeutre', () => {
      it('should return RésistanceNeutre with 1, 1', () => {
        // When
        const result = statistiquesService.extractor({'1% RésistanceNeutre': {'from': '1'}})

        // Then
        expect(result).toEqual(new ResistanceNeutre(1, 1))
      })
    })
    describe('when stat has 2% RésistanceNeutre', () => {
      it('should return RésistanceNeutre with 2, 2', () => {
        // When
        const result = statistiquesService.extractor({'2% RésistanceNeutre': {'from': '2'}})

        // Then
        expect(result).toEqual(new ResistanceNeutre(2, 2))
      })
    })
  })
})
