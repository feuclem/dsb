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
} from '../entities/Statistique'
import {PanoplieCharacteristiqueService} from './panoplieCharacteristique.service'

export const mapperPanoplieForStatInStuff = [
  {
    label: 'DommagesNeutreArme',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesNeutreArme(value)
  },
  {
    label: 'DommagesNeutre',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesNeutre(value)
  },
  {
    label: 'Force',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateForce(value)
  },
  {
    label: 'Intelligence',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateIntelligence(value)
  },
  {
    label: 'Chance',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateChance(value)
  },
  {
    label: 'Agilité',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateAgilite(value)
  },
  {
    label: 'Vitalité',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateVitalite(value)
  },
  {
    label: 'Sagesse',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateSagesse(value)
  },
  {
    label: 'Dommages',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommages(value)
  },
  {
    label: 'Puissance',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updatePuissance(value)
  },
  {
    label: 'DommagesTerre',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesTerre(value)
  },
  {
    label: 'DommagesTerreArme',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesTerreArme(value)
  },
  {
    label: 'DommagesFeu',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesFeu(value)
  },
  {
    label: 'DommagesFeuArme',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesFeuArme(value)
  },
  {
    label: 'DommagesEau',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesEau(value)
  },
  {
    label: 'DommagesEauArme',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesEauArme(value)
  },
  {
    label: 'DommagesAir',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesAir(value)
  },
  {
    label: 'DommagesAirArme',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesAirArme(value)
  },
  {
    label: 'Fuite',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateFuite(value)
  },
  {
    label: 'Tacle',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateTacle(value)
  },
  {
    label: 'Portée',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updatePo(value)
  },
  {
    label: 'PA',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updatePa(value)
  },
  {
    label: 'PM',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updatePm(value)
  },
  {
    label: 'RetraitPA',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateRetraitPa(value)
  },
  {
    label: 'RetraitPM',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateRetraitPm(value)
  },
  {
    label: 'EsquivePA',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateEsquivePa(value)
  },
  {
    label: 'EsquivePM',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateEsquivePm(value)
  },
  {
    label: 'ResistanceFixeNeutre',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceFixeNeutre(value)
  },
  {
    label: 'ResistanceFixeTerre',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceFixeTerre(value)
  },
  {
    label: 'ResistanceFixeFeu',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceFixeFeu(value)
  },
  {
    label: 'ResistanceFixeEau',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceFixeEau(value)
  },
  {
    label: 'ResistanceFixeAir',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceFixeAir(value)
  },
  {
    label: 'ResistanceCritiques',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceCritiques(value)
  },
  {
    label: 'ResistancePoussees',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistancePoussees(value)
  },
  {
    label: 'Soins',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateSoin(value)
  },
  {
    label: 'Pods',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updatePods(value)
  },
  {
    label: 'DommagesCritiques',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesCritiques(value)
  },
  {
    label: 'DommagesPoussee',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesPoussee(value)
  },
  {
    label: 'PuissancePiege',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updatePuissancePiege(value)
  },
  {
    label: 'DommagesPiege',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesPiege(value)
  },
  {
    label: 'DommagesAuxSorts',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesAuxSorts(value)
  },
  {
    label: 'Prospection',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateProspection(value)
  },
  {
    label: 'Invocations',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateInvocation(value)
  },
  {
    label: 'Initiative',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateInitiative(value)
  },
  // New data bind
  {
    label: 'ResistanceNeutre',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceNeutre(value)
  },
  {
    label: 'ResistanceTerre',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceTerre(value)
  },
  {
    label: 'ResistanceFeu',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceFeu(value)
  },
  {
    label: 'ResistanceEau',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceEau(value)
  },
  {
    label: 'ResistanceAir',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceAir(value)
  },
  {
    label: 'ResistanceDistance',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceDistance(value)
  },
  {
    label: 'ResistanceMelee',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateResistanceMelee(value)
  },
  {
    label: 'DommagesMelee',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesMelee(value)
  },
  {
    label: 'DommagesDistance',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateDommagesDistance(value)
  },
  {
    label: 'Critique',
    type: (service: PanoplieCharacteristiqueService, value: number) => service.updateCritique(value)
  }
]
