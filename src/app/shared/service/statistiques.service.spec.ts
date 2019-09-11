import {TestBed} from '@angular/core/testing'

import {StatistiquesService} from './statistiques.service'
import {CharacteristiqueService} from './characteristique.service'
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
  DommagesNeutreArme,
  DommagesPiege,
  DommagesPoussee,
  DommagesTerre,
  DommagesTerreArme,
  EsquivePA,
  EsquivePM,
  Force,
  Fuite,
  Initiative,
  Intelligence,
  Invocations,
  PA,
  PM,
  PO,
  Pods,
  Prospection,
  Puissance,
  PuissancePiege,
  ResistanceAir,
  ResistanceCritiques,
  ResistanceDistance,
  ResistanceEau,
  ResistanceFeu,
  ResistanceFixeAir,
  ResistanceFixeEau,
  ResistanceFixeFeu,
  ResistanceFixeNeutre,
  ResistanceFixeTerre,
  ResistanceMelee,
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
      providers: [StatistiquesService, CharacteristiqueService]
    })

    statistiquesService = TestBed.get(StatistiquesService)
    characteritiqueService = TestBed.get(CharacteristiqueService)
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
      {label: 'pourcentDommagesDistance', stat: {'pourcentDommagesDistance': {from: 1, to: 1}}, expected: new DommagesDistance(1, 1)},
      {label: 'pourcentDommagesMelee', stat: {'pourcentDommagesMelee': {from: 1, to: 1}}, expected: new DommagesMelee(1, 1)},
      {label: 'Invocations', stat: {'Invocations': {from: 1, to: 1}}, expected: new Invocations(1, 1)},
      {label: 'Prospection', stat: {'Prospection': {from: 1, to: 1}}, expected: new Prospection(1, 1)},
      {label: 'Initiative', stat: {'Initiative': {from: 1, to: 1}}, expected: new Initiative(1, 1)},
      {label: '% Dommages aux sorts', stat: {'% Dommages aux sorts': {from: 1, to: 1}}, expected: new DommagesAuxSorts(1, 1)},
      {label: 'Puissance (pièges)', stat: {'Puissance (pièges)': {from: 1, to: 1}}, expected: new PuissancePiege(1, 1)},
      {label: 'Dommages Pièges', stat: {'Dommages Pièges': {from: 1, to: 1}}, expected: new DommagesPiege(1, 1)},
      {label: 'critique', stat: {'critique': {from: 1, to: 1}}, expected: new Critique(1, 1)},
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
  })

  describe('setStatInStuff', () => {
    const listToTest = [
      {
        stat: new DommagesNeutreArme(1, 1),
        label: 'dommagesNeutreArme'
      },
      {
        stat: new DommagesNeutre(1, 1),
        label: 'dommagesNeutre'
      },
      {
        stat: new Sagesse(1, 1),
        label: 'sagesse'
      },
      {
        stat: new Dommages(1, 1),
        label: 'dommages'
      },
      {
        stat: new Puissance(1, 1),
        label: 'puissance'
      },
      {
        stat: new DommagesTerre(1, 1),
        label: 'dommagesTerre'
      },
      {
        stat: new DommagesTerreArme(1, 1),
        label: 'dommagesTerreArme'
      },
      {
        stat: new DommagesFeu(1, 1),
        label: 'dommagesFeu'
      },
      {
        stat: new DommagesFeuArme(1, 1),
        label: 'dommagesFeuArme'
      },
      {
        stat: new DommagesEau(1, 1),
        label: 'dommagesEau'
      },
      {
        stat: new DommagesEauArme(1, 1),
        label: 'dommagesEauArme'
      },
      {
        stat: new DommagesAir(1, 1),
        label: 'dommagesAir'
      },
      {
        stat: new DommagesAirArme(1, 1),
        label: 'dommagesAirArme'
      },
      {
        stat: new Fuite(1, 1),
        label: 'fuite'
      },
      {
        stat: new Tacle(1, 1),
        label: 'tacle'
      },
      {
        stat: new PO(1, 1),
        label: 'po'
      },
      {
        stat: new PA(1, 1),
        label: 'pa'
      },
      {
        stat: new PM(1, 1),
        label: 'pm'
      },
      {
        stat: new RetraitPA(1, 1),
        label: 'retraitPA'
      },
      {
        stat: new RetraitPM(1, 1),
        label: 'retraitPM'
      },
      {
        stat: new EsquivePA(1, 1),
        label: 'esquivePA'
      },
      {
        stat: new EsquivePM(1, 1),
        label: 'esquivePM'
      },
      {
        stat: new ResistanceFixeNeutre(1, 1),
        label: 'resistanceFixeNeutre'
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
      {
        stat: new ResistanceCritiques(1, 1),
        label: 'resistanceCritiques'
      },
      {
        stat: new ResistancePoussees(1, 1),
        label: 'resistancePoussees'
      },
      {
        stat: new Soins(1, 1),
        label: 'soins'
      },
      {
        stat: new Pods(1, 1),
        label: 'pods'
      },
      {
        stat: new DommagesCritiques(1, 1),
        label: 'dommagesCritiques'
      },
      {
        stat: new DommagesPoussee(1, 1),
        label: 'dommagesPoussee'
      },
      {
        stat: new PuissancePiege(1, 1),
        label: 'puissancePiege'
      },
      {
        stat: new DommagesPiege(1, 1),
        label: 'dommagesPiege'
      },
      {
        stat: new DommagesAuxSorts(1, 1),
        label: 'dommagesAuxSorts'
      },
      {
        stat: new Prospection(1, 1),
        label: 'prospection'
      },
      {
        stat: new Invocations(1, 1),
        label: 'invocations'
      },
      {
        stat: new Initiative(1, 1),
        label: 'initiative'
      },
      // New data bind
      {
        stat: new ResistanceNeutre(1, 1),
        label: 'resistanceNeutre'
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
        stat: new ResistanceDistance(1, 1),
        label: 'resistanceDistance'
      },
      {
        stat: new ResistanceMelee(1, 1),
        label: 'resistanceMelee'
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
        stat: new Critique(1, 1),
        label: 'critique'
      }
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

    const observableListToTest = [
      {
        stat: new Force(1, 1),
        property: 'updateForce'
      },
      {
        stat: new Intelligence(1, 1),
        property: 'updateIntelligence'
      },
      {
        stat: new Chance(1, 1),
        property: 'updateChance'
      },
      {
        stat: new Agilite(1, 1),
        property: 'updateAgilite'
      },
      {
        stat: new Vitalite(1, 1),
        property: 'updateVitalite'
      }
    ]

    observableListToTest.map(item => {
      it(`should set characteritique for ${item.stat.label}`, () => {
        // Given
        const spy = spyOn(characteritiqueService, item.property)

        // When
        statistiquesService.setStatInStuff(item.stat)

        // Then
        expect(spy).toHaveBeenCalledWith(1)
      })
    })
  })
})
