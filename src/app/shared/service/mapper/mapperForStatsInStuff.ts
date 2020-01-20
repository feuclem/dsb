import {
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
  Tacle
} from '../../entities/Statistique'
import {CharacteristiqueService} from '../characteristique.service'

export const mapperForStatInStuff = [
  {
    label: 'DommagesNeutreArme',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesNeutreArme(value)
  },
  {
    label: 'DommagesNeutre',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesNeutre(value)
  },
  {
    label: 'Force',
    type: (service: CharacteristiqueService, value: number) => service.updateForce(value)
  },
  {
    label: 'Intelligence',
    type: (service: CharacteristiqueService, value: number) => service.updateIntelligence(value)
  },
  {
    label: 'Chance',
    type: (service: CharacteristiqueService, value: number) => service.updateChance(value)
  },
  {
    label: 'Agilité',
    type: (service: CharacteristiqueService, value: number) => service.updateAgilite(value)
  },
  {
    label: 'Vitalité',
    type: (service: CharacteristiqueService, value: number) => service.updateVitalite(value)
  },
  {
    label: 'Sagesse',
    type: (service: CharacteristiqueService, value: number) => service.updateSagesse(value)
  },
  {
    label: 'Dommages',
    type: (service: CharacteristiqueService, value: number) => service.updateDommages(value)
  },
  {
    label: 'Puissance',
    type: (service: CharacteristiqueService, value: number) => service.updatePuissance(value)
  },
  {
    label: 'DommagesTerre',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesTerre(value)
  },
  {
    label: 'DommagesTerreArme',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesTerreArme(value)
  },
  {
    label: 'DommagesFeu',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesFeu(value)
  },
  {
    label: 'DommagesFeuArme',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesFeuArme(value)
  },
  {
    label: 'DommagesEau',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesEau(value)
  },
  {
    label: 'DommagesEauArme',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesEauArme(value)
  },
  {
    label: 'DommagesAir',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesAir(value)
  },
  {
    label: 'DommagesAirArme',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesAirArme(value)
  },
  {
    label: 'Fuite',
    type: (service: CharacteristiqueService, value: number) => service.updateFuite(value)
  },
  {
    label: 'Tacle',
    type: (service: CharacteristiqueService, value: number) => service.updateTacle(value)
  },
  {
    label: 'Portée',
    type: (service: CharacteristiqueService, value: number) => service.updatePo(value)
  },
  {
    label: 'PA',
    type: (service: CharacteristiqueService, value: number) => service.updatePa(value)
  },
  {
    label: 'PM',
    type: (service: CharacteristiqueService, value: number) => service.updatePm(value)
  },
  {
    label: 'RetraitPA',
    type: (service: CharacteristiqueService, value: number) => service.updateRetraitPa(value)
  },
  {
    label: 'RetraitPM',
    type: (service: CharacteristiqueService, value: number) => service.updateRetraitPm(value)
  },
  {
    label: 'EsquivePA',
    type: (service: CharacteristiqueService, value: number) => service.updateEsquivePa(value)
  },
  {
    label: 'EsquivePM',
    type: (service: CharacteristiqueService, value: number) => service.updateEsquivePm(value)
  },
  {
    label: 'ResistanceFixeNeutre',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceFixeNeutre(value)
  },
  {
    label: 'ResistanceFixeTerre',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceFixeTerre(value)
  },
  {
    label: 'ResistanceFixeFeu',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceFixeFeu(value)
  },
  {
    label: 'ResistanceFixeEau',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceFixeEau(value)
  },
  {
    label: 'ResistanceFixeAir',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceFixeAir(value)
  },
  {
    label: 'ResistanceCritiques',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceCritiques(value)
  },
  {
    label: 'ResistancePoussees',
    type: (service: CharacteristiqueService, value: number) => service.updateResistancePoussees(value)
  },
  {
    label: 'Soins',
    type: (service: CharacteristiqueService, value: number) => service.updateSoin(value)
  },
  {
    label: 'Pods',
    type: (service: CharacteristiqueService, value: number) => service.updatePods(value)
  },
  {
    label: 'DommagesCritiques',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesCritiques(value)
  },
  {
    label: 'DommagesPoussee',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesPoussee(value)
  },
  {
    label: 'PuissancePiege',
    type: (service: CharacteristiqueService, value: number) => service.updatePuissancePiege(value)
  },
  {
    label: 'DommagesPiege',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesPiege(value)
  },
  {
    label: 'DommagesAuxSorts',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesAuxSorts(value)
  },
  {
    label: 'Prospection',
    type: (service: CharacteristiqueService, value: number) => service.updateProspection(value)
  },
  {
    label: 'Invocations',
    type: (service: CharacteristiqueService, value: number) => service.updateInvocation(value)
  },
  {
    label: 'Initiative',
    type: (service: CharacteristiqueService, value: number) => service.updateInitiative(value)
  },
  // New data bind
  {
    label: 'ResistanceNeutre',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceNeutre(value)
  },
  {
    label: 'ResistanceTerre',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceTerre(value)
  },
  {
    label: 'ResistanceFeu',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceFeu(value)
  },
  {
    label: 'ResistanceEau',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceEau(value)
  },
  {
    label: 'ResistanceAir',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceAir(value)
  },
  {
    label: 'ResistanceDistance',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceDistance(value)
  },
  {
    label: 'ResistanceMelee',
    type: (service: CharacteristiqueService, value: number) => service.updateResistanceMelee(value)
  },
  {
    label: 'DommagesMelee',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesMelee(value)
  },
  {
    label: 'DommagesDistance',
    type: (service: CharacteristiqueService, value: number) => service.updateDommagesDistance(value)
  },
  {
    label: 'Critique',
    type: (service: CharacteristiqueService, value: number) => service.updateCritique(value)
  }
]
