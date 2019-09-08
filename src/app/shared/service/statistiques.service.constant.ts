import {
  Agilite,
  Chance, Critique,
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
  DommagesTerreArme, EsquivePA, EsquivePM,
  Force,
  Fuite, Initiative,
  Intelligence, Invocations,
  PA,
  PM,
  PO,
  Pods, Prospection,
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
    label: 'Esquive PA',
    type: EsquivePA
  },
  {
    label: 'Esquive PM',
    type: EsquivePM
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
    label: 'Dommages Poussée',
    type: DommagesPoussee
  },
  {
    label: 'Puissance (pièges)',
    type: PuissancePiege
  },
  {
    label: 'Dommages Pièges',
    type: DommagesPiege
  },
  {
    label: '% Dommages aux sorts',
    type: DommagesAuxSorts
  },
  {
    label: 'Prospection',
    type: Prospection
  },
  {
    label: 'Invocations',
    type: Invocations
  },
  {
    label: 'Initiative',
    type: Initiative
  },
  // New data bind
  {
    label: 'pourcentResistanceNeutre',
    type: ResistanceNeutre
  },
  {
    label: 'pourcentResistanceTerre',
    type: ResistanceTerre
  },
  {
    label: 'pourcentResistanceFeu',
    type: ResistanceFeu
  },
  {
    label: 'pourcentResistanceEau',
    type: ResistanceEau
  },
  {
    label: 'pourcentResistanceAir',
    type: ResistanceAir
  },
  {
    label: 'pourcentResistanceDistance',
    type: ResistanceDistance
  },
  {
    label: 'pourcentResistanceMelee',
    type: ResistanceMelee
  },
  {
    label: 'pourcentDommagesMelee',
    type: DommagesMelee
  },
  {
    label: 'pourcentDommagesDistance',
    type: DommagesDistance
  },
  {
    label: 'critique',
    type: Critique
  },
  {
    label: 'dommagesSorts',
    type: DommagesAuxSorts
  },
  {
    label: 'resistanceFixeNeutre',
    type: ResistanceFixeNeutre
  },
  {
    label: 'resistanceFixeTerre',
    type: ResistanceFixeTerre
  },
  {
    label: 'resistanceFixeFeu',
    type: ResistanceFixeFeu
  },
  {
    label: 'resistanceFixeEau',
    type: ResistanceFixeEau
  },
  {
    label: 'resistanceFixeAir',
    type: ResistanceFixeAir
  }
]

export const mapperForStatInStuff = [
  {
    label: 'DommagesNeutreArme',
    type: 'dommagesNeutreArme'
  },
  {
    label: 'DommagesNeutre',
    type: 'dommagesNeutre'
  },
  {
    label: 'Force',
    type: ''
  },
  {
    label: 'Intelligence',
    type: ''
  },
  {
    label: 'Chance',
    type: ''
  },
  {
    label: 'Agilité',
    type: ''
  },
  {
    label: 'Vitalité',
    type: ''
  },
  {
    label: 'Sagesse',
    type: 'sagesse'
  },
  {
    label: 'Dommages',
    type: 'dommages'
  },
  {
    label: 'Puissance',
    type: 'puissance'
  },
  {
    label: 'DommagesTerre',
    type: 'dommagesTerre'
  },
  {
    label: 'DommagesTerreArme',
    type: 'dommagesTerreArme'
  },
  {
    label: 'DommagesFeu',
    type: 'dommagesFeu'
  },
  {
    label: 'DommagesFeuArme',
    type: 'dommagesFeuArme'
  },
  {
    label: 'DommagesEau',
    type: 'dommagesEau'
  },
  {
    label: 'DommagesEauArme',
    type: 'dommagesEauArme'
  },
  {
    label: 'DommagesAir',
    type: 'dommagesAir'
  },
  {
    label: 'DommagesAirArme',
    type: 'dommagesAirArme'
  },
  {
    label: 'Fuite',
    type: 'fuite'
  },
  {
    label: 'Tacle',
    type: 'tacle'
  },
  {
    label: 'Portée',
    type: 'po'
  },
  {
    label: 'PA',
    type: 'pa'
  },
  {
    label: 'PM',
    type: 'pm'
  },
  {
    label: 'RetraitPA',
    type: 'retraitPA'
  },
  {
    label: 'RetraitPM',
    type: 'retraitPM'
  },
  {
    label: 'EsquivePA',
    type: 'esquivePA'
  },
  {
    label: 'EsquivePM',
    type: 'esquivePM'
  },
  {
    label: 'ResistanceFixeNeutre',
    type: 'resistanceFixeNeutre'
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
  {
    label: 'ResistanceCritiques',
    type: 'resistanceCritiques'
  },
  {
    label: 'ResistancePoussees',
    type: 'resistancePoussees'
  },
  {
    label: 'Soins',
    type: 'soins'
  },
  {
    label: 'Pods',
    type: 'pods'
  },
  {
    label: 'DommagesCritiques',
    type: 'dommagesCritiques'
  },
  {
    label: 'DommagesPoussee',
    type: 'dommagesPoussee'
  },
  {
    label: 'PuissancePiege',
    type: 'puissancePiege'
  },
  {
    label: 'DommagesPiege',
    type: 'dommagesPiege'
  },
  {
    label: 'DommagesAuxSorts',
    type: 'dommagesAuxSorts'
  },
  {
    label: 'Prospection',
    type: 'prospection'
  },
  {
    label: 'Invocations',
    type: 'invocations'
  },
  {
    label: 'Initiative',
    type: 'initiative'
  },
  // New data bind
  {
    label: 'ResistanceNeutre',
    type: 'resistanceNeutre'
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
    label: 'ResistanceDistance',
    type: 'resistanceDistance'
  },
  {
    label: 'ResistanceMelee',
    type: 'resistanceMelee'
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
    label: 'Critique',
    type: 'critique'
  }
]
