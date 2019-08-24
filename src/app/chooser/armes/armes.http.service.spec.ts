import {TestBed} from '@angular/core/testing'

import {ArmesHttpService} from './armes.http.service'
import {Arme} from '../../shared/entities/Arme'
import {DommagesNeutreArme, DommagesTerre, Force} from '../../shared/entities/Statistique'
import {StatistiquesService} from '../../shared/service/statistiques.service'
import {environment} from '../../../environments/environment'
import {StatistiquesServiceMock} from '../../shared/service/statistiques.service.mock'
import deepEqual = require('deep-equal')

let armesHttpService = null
let statistiquesService = null

describe('ArmesHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArmesHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
    armesHttpService = TestBed.get(ArmesHttpService)
    statistiquesService = TestBed.get(StatistiquesService)
  })

  const json = () => {
    return [
      {
        '_id': 44,
        'name': 'Epée de Boisaille',
        'lvl': '7',
        'type': 'Épée',
        'imgUrl': 'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/6007.png',
        'url': 'https://www.dofus.com/fr/mmorpg/encyclopedie/armes/44-epee-boisaille',
        'description': 'Epée de simple facture, elle ne fera pas de votre héros une légende.',
        'stats': [
          {
            '(dommages Neutre)': {
              'from': '8',
              'to': '10'
            }
          },
          {
            'Force': {
              'from': '7',
              'to': '10'
            }
          },
          {
            'Dommages Terre': {
              'from': '1'
            }
          }
        ],
        'condition': [
          'Force > 14'
        ],
        'characteristic': [
          {
            'PA': '3 (1 utilisation par tour)'
          },
          {
            'Portée': '1'
          },
          {
            'CC': '1/30 (+5)'
          }
        ],
        'recipe': [
          {
            'Bois de Frêne': {
              'id': '303',
              'url': 'https://www.dofus-touch.com/fr/mmorpg/encyclopedie/ressources/303-bois-frene',
              'imgUrl': 'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/52/38017.w48h48.png',
              'type': 'Bois',
              'lvl': '1',
              'quantity': '3'
            }
          },
          {
            'Plume Chimérique': {
              'id': '16512',
              'url': 'https://www.dofus-touch.com/fr/mmorpg/encyclopedie/ressources/16512-plume-chimerique',
              'imgUrl': 'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/52/53661.w48h48.png',
              'type': 'Plume',
              'lvl': '1',
              'quantity': '3'
            }
          }
        ],
        'setId': 0
      }
    ]
  }

  it('getAllArmes', () => {
    // Given
    environment.mock = false
    const stats = [
      new DommagesNeutreArme(
        8,
        10
      ),
      new Force(
        7,
        10
      ),
      new DommagesTerre(
        1,
        1
      )
    ]
    spyStatistiqueExtractor(statistiquesService, stats)
    spyOn(window, 'fetch').and.returnValues(Promise.resolve({json}))
    const expected = [
      new Arme(
        44,
        'Epée de Boisaille',
        7,
        'Épée',
        'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/6007.png',
        stats
      )
    ]

    // When
    return armesHttpService.getAllArmes().then(r => {
      expect(r).toEqual(expected)
    })
  })
})

function spyStatistiqueExtractor(service, stats) {
  spyOn(service, 'extractor').and.callFake(stat => {
      if (deepEqual(stat, {
        '(dommages Neutre)': {
          'from': '8',
          'to': '10'
        }
      })) {
        return stats[0]
      }
      if (deepEqual(stat, {
        'Force': {
          'from': '7',
          'to': '10'
        }
      })) {
        return stats[1]
      }
      if (deepEqual(stat, {
        'Dommages Terre': {
          'from': '1'
        }
      })) {
        return stats[2]
      }
    }
  )
}
