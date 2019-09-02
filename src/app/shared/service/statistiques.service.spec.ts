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
  DommagesNeutreArme,
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
      {label: 'dommagesArmeNeutre', stat: {'dommagesArmeNeutre': {from: 1, to: 1}}, expected: new DommagesNeutreArme(1, 1)},
      {label: 'dommagesNeutre', stat: {'dommagesNeutre': {from: 1, to: 1}}, expected: new DommagesNeutre(1, 1)},
      {label: 'force', stat: {'force': {from: 1, to: 1}}, expected: new Force(1, 1)},
      {label: 'intelligence', stat: {'intelligence': {from: 1, to: 1}}, expected: new Intelligence(1, 1)},
      {label: 'chance', stat: {'chance': {from: 1, to: 1}}, expected: new Chance(1, 1)},
      {label: 'agilite', stat: {'agilite': {from: 1, to: 1}}, expected: new Agilite(1, 1)},
      {label: 'vitalite', stat: {'vitalite': {from: 1, to: 1}}, expected: new Vitalite(1, 1)},
      {label: 'sagesse', stat: {'sagesse': {from: 1, to: 1}}, expected: new Sagesse(1, 1)},
      {label: 'dommages', stat: {'dommages': {from: 1, to: 1}}, expected: new Dommages(1, 1)},
      {label: 'puissance', stat: {'puissance': {from: 1, to: 1}}, expected: new Puissance(1, 1)},
      {label: 'dommagesTerre', stat: {'dommagesTerre': {from: 1, to: 1}}, expected: new DommagesTerre(1, 1)},
      {label: 'dommagesArmeTerre', stat: {'dommagesArmeTerre': {from: 1, to: 1}}, expected: new DommagesTerreArme(1, 1)},
      {label: 'dommagesFeu', stat: {'dommagesFeu': {from: 1, to: 1}}, expected: new DommagesFeu(1, 1)},
      {label: 'dommagesArmeFeu', stat: {'dommagesArmeFeu': {from: 1, to: 1}}, expected: new DommagesFeuArme(1, 1)},
      {label: 'dommagesEau', stat: {'dommagesEau': {from: 1, to: 1}}, expected: new DommagesEau(1, 1)},
      {label: 'dommagesArmeEau', stat: {'dommagesArmeEau': {from: 1, to: 1}}, expected: new DommagesEauArme(1, 1)},
      {label: 'dommagesAir', stat: {'dommagesAir': {from: 1, to: 1}}, expected: new DommagesAir(1, 1)},
      {label: 'dommagesArmeAir', stat: {'dommagesArmeAir': {from: 1, to: 1}}, expected: new DommagesAirArme(1, 1)},
      {label: 'fuite', stat: {'fuite': {from: 1, to: 1}}, expected: new Fuite(1, 1)},
      {label: 'tacle', stat: {'tacle': {from: 1, to: 1}}, expected: new Tacle(1, 1)},
      {label: 'po', stat: {'po': {from: 1, to: 1}}, expected: new PO(1, 1)},
      {label: 'pm', stat: {'pm': {from: 1, to: 1}}, expected: new PM(1, 1)},
      {label: 'pa', stat: {'pa': {from: 1, to: 1}}, expected: new PA(1, 1)},
      {label: 'retraitPM', stat: {'retraitPM': {from: 1, to: 1}}, expected: new RetraitPM(1, 1)},
      {label: 'retraitPA', stat: {'retraitPA': {from: 1, to: 1}}, expected: new RetraitPA(1, 1)},
      {label: 'resistanceNeutre', stat: {'resistanceNeutre': {from: 1, to: 1}}, expected: new ResistanceFixeNeutre(1, 1)},
      {label: 'resistanceTerre', stat: {'resistanceTerre': {from: 1, to: 1}}, expected: new ResistanceFixeTerre(1, 1)},
      {label: 'resistanceFeu', stat: {'resistanceFeu': {from: 1, to: 1}}, expected: new ResistanceFixeFeu(1, 1)},
      {label: 'resistanceEau', stat: {'resistanceEau': {from: 1, to: 1}}, expected: new ResistanceFixeEau(1, 1)},
      {label: 'resistanceAir', stat: {'resistanceAir': {from: 1, to: 1}}, expected: new ResistanceFixeAir(1, 1)},
      {label: 'resistanceCritiques', stat: {'resistanceCritiques': {from: 1, to: 1}}, expected: new ResistanceCritiques(1, 1)},
      {label: 'resistancePoussees', stat: {'resistancePoussees': {from: 1, to: 1}}, expected: new ResistancePoussees(1, 1)},
      {label: 'soins', stat: {'soins': {from: 1, to: 1}}, expected: new Soins(1, 1)},
      {label: 'pods', stat: {'pods': {from: 1, to: 1}}, expected: new Pods(1, 1)},
      {label: 'dommagesCritiques', stat: {'dommagesCritiques': {from: 1, to: 1}}, expected: new DommagesCritiques(1, 1)},
      {label: 'pourcentDommagesDistance', stat: {'pourcentDommagesDistance': {from: 1, to: 1}}, expected: new DommagesDistance(1, 1)},
      {label: 'pourcentDommagesMelee', stat: {'pourcentDommagesMelee': {from: 1, to: 1}}, expected: new DommagesMelee(1, 1)},
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
