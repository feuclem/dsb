import {
  Agilite,
  Chance,
  Dommages,
  DommagesAir,
  DommagesAirArme,
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
  ResistanceCritiques,
  ResistanceFixeAir,
  ResistanceFixeEau,
  ResistanceFixeFeu,
  ResistanceFixeNeutre,
  ResistanceFixeTerre,
  ResistancePoussees,
  RetraitPA,
  RetraitPM,
  Sagesse,
  Soins,
  Tacle,
  Vitalite
} from '../entities/Statistique'

export const mapperStat = [
  {
    label: 'dommagesArmeNeutre',
    type: DommagesNeutreArme
  },
  {
    label: 'dommagesNeutre',
    type: DommagesNeutre
  },
  {
    label: 'force',
    type: Force
  },
  {
    label: 'intelligence',
    type: Intelligence
  },
  {
    label: 'chance',
    type: Chance
  },
  {
    label: 'agilite',
    type: Agilite
  },
  {
    label: 'vitalite',
    type: Vitalite
  },
  {
    label: 'sagesse',
    type: Sagesse
  },
  {
    label: 'dommages',
    type: Dommages
  },
  {
    label: 'puissance',
    type: Puissance
  },
  {
    label: 'dommagesTerre',
    type: DommagesTerre
  },
  {
    label: 'dommagesArmeTerre',
    type: DommagesTerreArme
  },
  {
    label: 'dommagesFeu',
    type: DommagesFeu
  },
  {
    label: 'dommagesArmeFeu',
    type: DommagesFeuArme
  },
  {
    label: 'dommagesEau',
    type: DommagesEau
  },
  {
    label: 'dommagesArmeEau',
    type: DommagesEauArme
  },
  {
    label: 'dommagesAir',
    type: DommagesAir
  },
  {
    label: 'dommagesArmeAir',
    type: DommagesAirArme
  },
  {
    label: 'fuite',
    type: Fuite
  },
  {
    label: 'tacle',
    type: Tacle
  },
  {
    label: 'po',
    type: PO
  },
  {
    label: 'pa',
    type: PA
  },
  {
    label: 'pm',
    type: PM
  },
  {
    label: 'retraitPA',
    type: RetraitPA
  },
  {
    label: 'retraitPM',
    type: RetraitPM
  },
  {
    label: 'resistanceNeutre',
    type: ResistanceFixeNeutre
  },
  {
    label: 'resistanceTerre',
    type: ResistanceFixeTerre
  },
  {
    label: 'resistanceFeu',
    type: ResistanceFixeFeu
  },
  {
    label: 'resistanceEau',
    type: ResistanceFixeEau
  },
  {
    label: 'resistanceAir',
    type: ResistanceFixeAir
  },
  {
    label: 'resistanceCritiques',
    type: ResistanceCritiques
  },
  {
    label: 'resistancePoussée',
    type: ResistancePoussees
  },
  {
    label: 'soins',
    type: Soins
  },
  {
    label: 'pods',
    type: Pods
  },
  {
    label: 'dommagesCritiques',
    type: DommagesCritiques
  },
  {
    label: 'pourcentDommagesMelee',
    type: DommagesMelee
  },
  {
    label: 'pourcentDommagesDistance',
    type: DommagesDistance
  }
  // pourcentResistanceDistance
  // pourcentResistanceMelee
]

export const mapperForStatInStuff = [
  {
    label: 'Force',
    type: 'force'
  },
  {
    label: 'Intelligence',
    type: 'intelligence'
  },
  {
    label: 'Chance',
    type: 'chance'
  },
  {
    label: 'Agilite',
    type: 'agilite'
  },
  {
    label: 'Vitalité',
    type: 'vitalite'
  },
  {
    label: 'Puissance',
    type: 'puissance'
  },
  {
    label: 'Dommages',
    type: 'dommages'
  },
  {
    label: 'DommagesTerre',
    type: 'dommagesTerre'
  },
  {
    label: 'DommagesFeu',
    type: 'dommagesFeu'
  },
  {
    label: 'DommagesEau',
    type: 'dommagesEau'
  },
  {
    label: 'DommagesAir',
    type: 'dommagesAir'
  },
  {
    label: 'DommagesCritiques',
    type: 'dommagesCritique'
  },
  {
    label: 'DommagesMelee',
    type: 'pourcentDommagesMelee'
  },
  {
    label: 'DommagesDistance',
    type: 'pourcentDommagesDistance'
  },
  {
    label: 'DommagesAuxSorts',
    type: 'dommagesAuxSorts'
  },
  {
    label: 'ResistanceTerre',
    type: 'resistanceTerre'
  },
  {
    label: 'ResistanceFeu',
    type: 'resistanceFeu'
  },
  {
    label: 'ResistanceEau',
    type: 'resistanceEau'
  },
  {
    label: 'ResistanceAir',
    type: 'resistanceAir'
  },
  {
    label: 'ResistanceFixeTerre',
    type: 'resistanceFixeTerre'
  },
  {
    label: 'ResistanceFixeFeu',
    type: 'resistanceFixeFeu'
  },
  {
    label: 'ResistanceFixeEau',
    type: 'resistanceFixeEau'
  },
  {
    label: 'ResistanceFixeAir',
    type: 'resistanceFixeAir'
  },
]

