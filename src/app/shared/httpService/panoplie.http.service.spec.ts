import {TestBed} from '@angular/core/testing'

import {PanoplieHttpService} from './panoplie.http.service'
import {DommagesCritiques, PA, Puissance, Vitalite} from '../entities/Statistique'
import {Panoplie} from '../entities/Panoplie'
import {StatistiquesService} from '../service/statistiques.service'
import {environment} from '../../../environments/environment'
import {StatistiquesServiceMock} from '../service/statistiques.service.mock'
import {Bonus} from '../entities/Bonus'
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
        'type': 'Panoplie',
        'imgUrl': 'https://s.ankama.com/www/static.ankama.com/dofus/renderer/look/7b317c38302c323132347c313d31363736353536342' +
          'c323d31363335353838332c333d31363737373138352c343d323931303036342c353d31343536313739397c3134307d/full/1/200_200-10.png',
        'url': 'https://www.dofus.com/fr/mmorpg/encyclopedie/panoplies/274-panoplie-strigide',
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
          '14094',
          '14095',
          '14096'
        ]
      }]
  }

  it('getAllPanoplie', () => {
    // Given
    environment.mock = false
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
        'Panoplie',
        'https://s.ankama.com/www/static.ankama.com/dofus/renderer/look/7b317c38302c323132347c313d31363736353536342c323d31363' +
        '335353838332c333d31363737373138352c343d323931303036342c353d31343536313739397c3134307d/full/1/200_200-10.png',
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
