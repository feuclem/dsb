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
    label: '(dommages Neutre)',
    type: DommagesNeutreArme
  },
  {
    label: 'Dommages Neutre',
    type: DommagesNeutre
  },
  {
    label: 'Force',
    type: Force
  },
  {
    label: 'Intelligence',
    type: Intelligence
  },
  {
    label: 'Chance',
    type: Chance
  },
  {
    label: 'Agilité',
    type: Agilite
  },
  {
    label: 'Vitalité',
    type: Vitalite
  },
  {
    label: 'Sagesse',
    type: Sagesse
  },
  {
    label: 'Dommages',
    type: Dommages
  },
  {
    label: 'Puissance',
    type: Puissance
  },
  {
    label: 'Dommages Terre',
    type: DommagesTerre
  },
  {
    label: '(dommages Terre)',
    type: DommagesTerreArme
  },
  {
    label: 'Dommages Feu',
    type: DommagesFeu
  },
  {
    label: '(dommages Feu)',
    type: DommagesFeuArme
  },
  {
    label: 'Dommages Eau',
    type: DommagesEau
  },
  {
    label: '(dommages Eau)',
    type: DommagesEauArme
  },
  {
    label: 'Dommages Air',
    type: DommagesAir
  },
  {
    label: '(dommages Air)',
    type: DommagesAirArme
  },
  {
    label: 'Fuite',
    type: Fuite
  },
  {
    label: 'Tacle',
    type: Tacle
  },
  {
    label: 'Portée',
    type: PO
  },
  {
    label: 'PA',
    type: PA
  },
  {
    label: 'PM',
    type: PM
  },
  {
    label: 'Retrait PA',
    type: RetraitPA
  },
  {
    label: 'Retrait PM',
    type: RetraitPM
  },
  {
    label: 'Résistance Neutre',
    type: ResistanceFixeNeutre
  },
  {
    label: 'Résistance Terre',
    type: ResistanceFixeTerre
  },
  {
    label: 'Résistance Feu',
    type: ResistanceFixeFeu
  },
  {
    label: 'Résistance Eau',
    type: ResistanceFixeEau
  },
  {
    label: 'Résistance Air',
    type: ResistanceFixeAir
  },
  {
    label: 'Résistance Critiques',
    type: ResistanceCritiques
  },
  {
    label: 'Résistance Poussée',
    type: ResistancePoussees
  },
  {
    label: 'Soins',
    type: Soins
  },
  {
    label: 'Pods',
    type: Pods
  },
  {
    label: 'Dommages Critiques',
    type: DommagesCritiques
  },
  {
    label: '% Dommages mêlée',
    type: DommagesMelee
  },
  {
    label: '% Dommages distance',
    type: DommagesDistance
  }
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
    type: 'dommagesMelee'
  },
  {
    label: 'DommagesDistance',
    type: 'dommagesDistance'
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

