import {TestBed} from '@angular/core/testing'

import {PanoplieHttpService} from './panoplie.http.service'
import {DommagesCritiques, PA, Puissance, Vitalite} from '../entities/Statistique'
import {Panoplie} from '../entities/Panoplie'
import {StatistiquesService} from '../service/statistiques.service'
import {StatistiquesServiceMock} from '../service/statistiques.service.mock'
import {Bonus} from '../entities/Bonus'
import {Equipement} from '../entities/Equipement'
import deepEqual = require('deep-equal')

let panoplieHttpService = null
let statistiquesService = null

describe('PanoplieHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanoplieHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
    panoplieHttpService = TestBed.get(PanoplieHttpService)
    statistiquesService = TestBed.get(StatistiquesService)
  })

  const json = () => {
    return [
      {
        '_id': 274,
        'name': 'Panoplie du Strigide',
        'lvl': '200',
        'bonus': [
          {
            'number': 1,
            'stats': [
              {
                'Vitalité': {
                  'from': '100'
                }
              },
              {
                'Puissance': {
                  'from': '50'
                }
              },
              {
                'Dommages Critiques': {
                  'from': '20'
                }
              }
            ]
          },
          {
            'number': 2,
            'stats': [
              {
                'PA': {
                  'from': '1'
                }
              },
              {
                'Dommages Critiques': {
                  'from': '20'
                }
              },
              {
                'Puissance': {
                  'from': '50'
                }
              },
              {
                'Vitalité': {
                  'from': '100'
                }
              }
            ]
          }
        ],
        'equipment_id': [
          14094,
          14095,
          14096
        ],
        'equipments': [
          {
            '_id': 14094,
            'name': 'Amulette du Strigide',
            'lvl': '200',
            'imgUrl': 'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1235.png',
            'stats': [
              {
                'Vitalité': {
                  'from': '351',
                  'to': '400'
                }
              },
              {
                'Sagesse': {
                  'from': '31',
                  'to': '40'
                }
              },
              {
                '% Critique': {
                  'from': '4',
                  'to': '6'
                }
              },
              {
                'Puissance': {
                  'from': '51',
                  'to': '70'
                }
              },
              {
                'PA': {
                  'from': '1'
                }
              },
              {
                '% Résistance Terre': {
                  'from': '6',
                  'to': '8'
                }
              },
              {
                '% Résistance Air': {
                  'from': '6',
                  'to': '8'
                }
              },
              {
                'Esquive PA': {
                  'from': '4',
                  'to': '6'
                }
              },
              {
                'Tacle': {
                  'from': '11',
                  'to': '15'
                }
              },
              {
                'Dommages Critiques': {
                  'from': '16',
                  'to': '25'
                }
              },
              {
                'Résistance Critiques': {
                  'from': '-16',
                  'to': '-20'
                }
              }
            ],
            'type': 'Amulette',
            'setId': 274
          },
          {
            '_id': 14095,
            'name': 'Ceinture du Strigide',
            'lvl': '200',
            'imgUrl': 'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10244.png',
            'stats': [
              {
                'Vitalité': {
                  'from': '301',
                  'to': '350'
                }
              },
              {
                'Sagesse': {
                  'from': '31',
                  'to': '50'
                }
              },
              {
                'Soins': {
                  'from': '5',
                  'to': '7'
                }
              },
              {
                '% Critique': {
                  'from': '5',
                  'to': '7'
                }
              },
              {
                'Puissance': {
                  'from': '41',
                  'to': '60'
                }
              },
              {
                'Initiative': {
                  'from': '301',
                  'to': '400'
                }
              },
              {
                'Dommages Neutre': {
                  'from': '7',
                  'to': '10'
                }
              },
              {
                'Dommages Terre': {
                  'from': '7',
                  'to': '10'
                }
              },
              {
                'Dommages Feu': {
                  'from': '7',
                  'to': '10'
                }
              },
              {
                'Dommages Eau': {
                  'from': '7',
                  'to': '10'
                }
              },
              {
                'Dommages Air': {
                  'from': '7',
                  'to': '10'
                }
              },
              {
                '% Résistance Neutre': {
                  'from': '6',
                  'to': '8'
                }
              },
              {
                'Tacle': {
                  'from': '7',
                  'to': '10'
                }
              },
              {
                'Dommages Critiques': {
                  'from': '11',
                  'to': '15'
                }
              },
              {
                'Résistance Critiques': {
                  'from': '-16',
                  'to': '-25'
                }
              }
            ],
            'type': 'Ceinture',
            'setId': 274
          },
          {
            '_id': 14096,
            'name': 'Bottes du Strigide',
            'lvl': '200',
            'imgUrl': 'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11241.png',
            'stats': [
              {
                'Vitalité': {
                  'from': '351',
                  'to': '400'
                }
              },
              {
                'Sagesse': {
                  'from': '31',
                  'to': '50'
                }
              },
              {
                'Puissance': {
                  'from': '51',
                  'to': '75'
                }
              },
              {
                'PM': {
                  'from': '1'
                }
              },
              {
                'Dommages Neutre': {
                  'from': '9',
                  'to': '13'
                }
              },
              {
                'Dommages Terre': {
                  'from': '9',
                  'to': '13'
                }
              },
              {
                'Dommages Feu': {
                  'from': '9',
                  'to': '13'
                }
              },
              {
                'Dommages Eau': {
                  'from': '9',
                  'to': '13'
                }
              },
              {
                'Dommages Air': {
                  'from': '9',
                  'to': '13'
                }
              },
              {
                '% Résistance Feu': {
                  'from': '6',
                  'to': '8'
                }
              },
              {
                'Esquive PA': {
                  'from': '6',
                  'to': '8'
                }
              },
              {
                'Résistance Critiques': {
                  'from': '-16',
                  'to': '-20'
                }
              }
            ],
            'type': 'Bottes',
            'setId': 274
          }
        ]
      }]
  }

  it('getAllPanoplie', () => {
    // Given
    const statsForBonus1 = [
      new Vitalite(100, 100),
      new Puissance(50, 50),
      new DommagesCritiques(20, 20)
    ]
    const statsForBonus2 = [
      new PA(1, 1),
      new DommagesCritiques(20, 20),
      new Puissance(50, 50),
      new Vitalite(100, 100)
    ]
    spyStatistiqueExtractor(statistiquesService, statsForBonus1, statsForBonus2)
    spyOn(window, 'fetch').and.returnValues(Promise.resolve({json}))
    const expected = [
      new Panoplie(
        274,
        'Panoplie du Strigide',
        200,
        undefined,
        'http://localhost:3000/images/panoplies/PanoplieduStrigide.png',
        [
          new Bonus(
            1,
            statsForBonus1
          ),
          new Bonus(
            2,
            statsForBonus2
          )
        ],
        [
          14094,
          14095,
          14096
        ],
        [
          new Equipement(
            14094,
            'Amulette du Strigide',
            200,
            'Amulette',
            'http://localhost:3000/images/amulettes/AmuletteduStrigide.png',
            [],
            274
          ),
          new Equipement(
            14095,
            'Bottes du Strigide',
            200,
            'Bottes',
            'http://localhost:3000/images/bottes/BottesduStrigide.png',
            [],
            274
          ),
          new Equipement(
            14096,
            'Ceinture du Strigide',
            200,
            'Ceinture',
            'http://localhost:3000/images/ceintures/CeintureduStrigide.png',
            [],
            274
          )
        ]
      )
    ]

    // When
    return panoplieHttpService.getAllPanoplie().then(r => {
      expect(r).toEqual(expected)
    })
  })
})

function spyStatistiqueExtractor(service, stats1, stats2) {
  spyOn(service, 'extractor').and.callFake(stat => {
      if (deepEqual(stat, {
        'Vitalité': {
          'from': '100'
        }
      })) {
        return stats1[0]
      }
      if (deepEqual(stat,
        {
          'Puissance': {
            'from': '50'
          }
        })) {
        return stats1[1]
      }
      if (deepEqual(stat, {
        'Dommages Critiques': {
          'from': '20'
        }
      })) {
        return stats1[2]
      }
      if (deepEqual(stat, {
        'PA': {
          'from': '1'
        }
      })) {
        return stats2[0]
      }
    }
  )
}
