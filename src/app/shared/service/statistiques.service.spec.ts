import {TestBed} from '@angular/core/testing'

import {StatistiquesService} from './statistiques.service'
import {CharacteritiqueService} from './characteritique.service'
import {
  Agilite,
  Chance,
  Critique,
  Dommages,
  DommagesAir,
  DommagesAirArme,
  DommagesAuxSorts,
  DommagesCritiques,
  DommagesDistance,
  DommagesEau,
  DommagesEauArme,
  DommagesFeu,
  DommagesFeuArme,
  DommagesMelee,
  DommagesNeutre,
  DommagesNeutreArme, DommagesPoussee,
  DommagesTerre,
  DommagesTerreArme,
  Force,
  Fuite,
  Intelligence,
  PA,
  PM,
  PO,
  Pods,
  Puissance,
  ResistanceAir,
  ResistanceCritiques,
  ResistanceEau,
  ResistanceFeu,
  ResistanceFixeAir,
  ResistanceFixeEau,
  ResistanceFixeFeu,
  ResistanceFixeNeutre,
  ResistanceFixeTerre,
  ResistanceNeutre,
  ResistancePoussees,
  ResistanceTerre,
  RetraitPA,
  RetraitPM,
  Sagesse,
  Soins,
  Tacle,
  Vitalite
} from '../entities/Statistique'

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
    const listToTest = [
      {label: '(dommages Neutre)', stat: {'(dommages Neutre)': {from: 1, to: 1}}, expected: new DommagesNeutreArme(1, 1)},
      {label: 'Dommages Neutre', stat: {'Dommages Neutre': {from: 1, to: 1}}, expected: new DommagesNeutre(1, 1)},
      {label: 'Force', stat: {'Force': {from: 1, to: 1}}, expected: new Force(1, 1)},
      {label: 'Intelligence', stat: {'Intelligence': {from: 1, to: 1}}, expected: new Intelligence(1, 1)},
      {label: 'Chance', stat: {'Chance': {from: 1, to: 1}}, expected: new Chance(1, 1)},
      {label: 'Agilité', stat: {'Agilité': {from: 1, to: 1}}, expected: new Agilite(1, 1)},
      {label: 'Vitalité', stat: {'Vitalité': {from: 1, to: 1}}, expected: new Vitalite(1, 1)},
      {label: 'Sagesse', stat: {'Sagesse': {from: 1, to: 1}}, expected: new Sagesse(1, 1)},
      {label: 'Dommages', stat: {'Dommages': {from: 1, to: 1}}, expected: new Dommages(1, 1)},
      {label: 'Puissance', stat: {'Puissance': {from: 1, to: 1}}, expected: new Puissance(1, 1)},
      {label: 'Dommages Terre', stat: {'Dommages Terre': {from: 1, to: 1}}, expected: new DommagesTerre(1, 1)},
      {label: '(dommages Terre)', stat: {'(dommages Terre)': {from: 1, to: 1}}, expected: new DommagesTerreArme(1, 1)},
      {label: 'Dommages Feu', stat: {'Dommages Feu': {from: 1, to: 1}}, expected: new DommagesFeu(1, 1)},
      {label: '(dommages Feu)', stat: {'(dommages Feu)': {from: 1, to: 1}}, expected: new DommagesFeuArme(1, 1)},
      {label: 'Dommages Eau', stat: {'Dommages Eau': {from: 1, to: 1}}, expected: new DommagesEau(1, 1)},
      {label: '(dommages Eau)', stat: {'(dommages Eau)': {from: 1, to: 1}}, expected: new DommagesEauArme(1, 1)},
      {label: 'Dommages Air', stat: {'Dommages Air': {from: 1, to: 1}}, expected: new DommagesAir(1, 1)},
      {label: '(dommages Air)', stat: {'(dommages Air)': {from: 1, to: 1}}, expected: new DommagesAirArme(1, 1)},
      {label: 'Fuite', stat: {'Fuite': {from: 1, to: 1}}, expected: new Fuite(1, 1)},
      {label: 'Tacle', stat: {'Tacle': {from: 1, to: 1}}, expected: new Tacle(1, 1)},
      {label: 'Portée', stat: {'Portée': {from: 1, to: 1}}, expected: new PO(1, 1)},
      {label: 'PM', stat: {'PM': {from: 1, to: 1}}, expected: new PM(1, 1)},
      {label: 'PA', stat: {'PA': {from: 1, to: 1}}, expected: new PA(1, 1)},
      {label: 'Retrait PM', stat: {'Retrait PM': {from: 1, to: 1}}, expected: new RetraitPM(1, 1)},
      {label: 'Retrait PA', stat: {'Retrait PA': {from: 1, to: 1}}, expected: new RetraitPA(1, 1)},
      {label: 'Résistance Neutre', stat: {'Résistance Neutre': {from: 1, to: 1}}, expected: new ResistanceFixeNeutre(1, 1)},
      {label: 'Résistance Terre', stat: {'Résistance Terre': {from: 1, to: 1}}, expected: new ResistanceFixeTerre(1, 1)},
      {label: 'Résistance Feu', stat: {'Résistance Feu': {from: 1, to: 1}}, expected: new ResistanceFixeFeu(1, 1)},
      {label: 'Résistance Eau', stat: {'Résistance Eau': {from: 1, to: 1}}, expected: new ResistanceFixeEau(1, 1)},
      {label: 'Résistance Air', stat: {'Résistance Air': {from: 1, to: 1}}, expected: new ResistanceFixeAir(1, 1)},
      {label: 'Résistance Critiques', stat: {'Résistance Critiques': {from: 1, to: 1}}, expected: new ResistanceCritiques(1, 1)},
      {label: 'Résistance Poussée', stat: {'Résistance Poussée': {from: 1, to: 1}}, expected: new ResistancePoussees(1, 1)},
      {label: 'Soins', stat: {'Soins': {from: 1, to: 1}}, expected: new Soins(1, 1)},
      {label: 'Pods', stat: {'Pods': {from: 1, to: 1}}, expected: new Pods(1, 1)},
      {label: 'Dommages Critiques', stat: {'Dommages Critiques': {from: 1, to: 1}}, expected: new DommagesCritiques(1, 1)},
      {label: 'Dommages Poussée', stat: {'Dommages Poussée': {from: 1, to: 1}}, expected: new DommagesPoussee(1, 1)},
      {label: '% Dommages distance', stat: {'% Dommages distance': {from: 1, to: 1}}, expected: new DommagesDistance(1, 1)},
      {label: '% Dommages mêlée', stat: {'% Dommages mêlée': {from: 1, to: 1}}, expected: new DommagesMelee(1, 1)},
    ]

    describe('basic stat', () => {
      listToTest.map(item => {
        it(`for ${item.label}`, () => {
          // When
          const result = statistiquesService.extractor(item.stat)

          // Then
          expect(result).toEqual(item.expected)
        })
      })
    })

    describe('complexe stat', () => {
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

      describe('when stat has % Résistance Neutre', () => {
        it('should return ResistanceNeutre with 1, 2', () => {
          // When
          const result = statistiquesService.extractor({'% Résistance Neutre': {'from': '1', 'to': '2'}})

          // Then
          expect(result).toEqual(new ResistanceNeutre(1, 2))
        })

        it('should return RésistanceNeutre with 1, 3', () => {
          // When
          const result = statistiquesService.extractor({'% Résistance Neutre': {'from': '1', 'to': '3'}})

          // Then
          expect(result).toEqual(new ResistanceNeutre(1, 3))
        })
      })
      describe('when stat has 1% Résistance Neutre', () => {
        it('should return RésistanceNeutre with 1, 1', () => {
          // When
          const result = statistiquesService.extractor({'1% Résistance Neutre': {'from': '1'}})

          // Then
          expect(result).toEqual(new ResistanceNeutre(1, 1))
        })
      })
      describe('when stat has 2% Résistance Neutre', () => {
        it('should return RésistanceNeutre with 2, 2', () => {
          // When
          const result = statistiquesService.extractor({'2% Résistance Neutre': {'from': '2'}})

          // Then
          expect(result).toEqual(new ResistanceNeutre(2, 2))
        })
      })

      describe('when stat has % Critique', () => {
        it('should return Critique with 1, 2', () => {
          // When
          const result = statistiquesService.extractor({'% Critique': {'from': '1', 'to': '2'}})

          // Then
          expect(result).toEqual(new Critique(1, 2))
        })

        it('should return Critique with 1, 3', () => {
          // When
          const result = statistiquesService.extractor({'% Critique': {'from': '1', 'to': '3'}})

          // Then
          expect(result).toEqual(new Critique(1, 3))
        })
      })
      describe('when stat has 1% Critique', () => {
        it('should return Critique with 1, 1', () => {
          // When
          const result = statistiquesService.extractor({'1% Critique': {'from': '1'}})

          // Then
          expect(result).toEqual(new Critique(1, 1))
        })
      })
      describe('when stat has 2% Critique', () => {
        it('should return Critique with 2, 2', () => {
          // When
          const result = statistiquesService.extractor({'2% Critique': {'from': '2'}})

          // Then
          expect(result).toEqual(new Critique(2, 2))
        })
      })
    })
  })

  describe('setStatInStuff', () => {
    const listToTest = [
      {
        stat: new Force(1, 1),
        label: 'force'
      },
      {
        stat: new Intelligence(1, 1),
        label: 'intelligence'
      },
      {
        stat: new Chance(1, 1),
        label: 'chance'
      },
      {
        stat: new Agilite(1, 1),
        label: 'agilite'
      },
      {
        stat: new Vitalite(1, 1),
        label: 'vitalite'
      },
      {
        stat: new Puissance(1, 1),
        label: 'puissance'
      },
      {
        stat: new Dommages(1, 1),
        label: 'dommages'
      },
      {
        stat: new DommagesTerre(1, 1),
        label: 'dommagesTerre'
      },
      {
        stat: new DommagesFeu(1, 1),
        label: 'dommagesFeu'
      },
      {
        stat: new DommagesEau(1, 1),
        label: 'dommagesEau'
      },
      {
        stat: new DommagesAir(1, 1),
        label: 'dommagesAir'
      },
      {
        stat: new DommagesCritiques(1, 1),
        label: 'dommagesCritique'
      },
      {
        stat: new DommagesMelee(1, 1),
        label: 'dommagesMelee'
      },
      {
        stat: new DommagesDistance(1, 1),
        label: 'dommagesDistance'
      },
      {
        stat: new DommagesAuxSorts(1, 1),
        label: 'dommagesAuxSorts'
      },
      {
        stat: new ResistanceTerre(1, 1),
        label: 'resistanceTerre'
      },
      {
        stat: new ResistanceFeu(1, 1),
        label: 'resistanceFeu'
      },
      {
        stat: new ResistanceEau(1, 1),
        label: 'resistanceEau'
      },
      {
        stat: new ResistanceAir(1, 1),
        label: 'resistanceAir'
      },
      {
        stat: new ResistanceFixeTerre(1, 1),
        label: 'resistanceFixeTerre'
      },
      {
        stat: new ResistanceFixeFeu(1, 1),
        label: 'resistanceFixeFeu'
      },
      {
        stat: new ResistanceFixeEau(1, 1),
        label: 'resistanceFixeEau'
      },
      {
        stat: new ResistanceFixeAir(1, 1),
        label: 'resistanceFixeAir'
      },
    ]


    listToTest.map(item => {
      it(`should set characteritique for ${item.stat.label}`, () => {
        // Given
        const spy = spyOnProperty(characteritiqueService, item.label, 'set')

        // When
        statistiquesService.setStatInStuff(item.stat)

        // Then
        expect(spy).toHaveBeenCalledWith(1)
      })
    })
  })
})
