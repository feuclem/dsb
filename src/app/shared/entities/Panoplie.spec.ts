import {Bonus, Panoplie} from './Panoplie'
import {DommagesCritiques, Force, Intelligence, PA, Puissance, RetraitPM, Vitalite} from './Statistique'

describe('getPanoplieBonus for one panoplie', () => {
  const listIdEquipementToTest = [
    {
      shouldReturn: 'should return empty list',
      given: [14094],
      expected: []
    },
    {
      shouldReturn: 'should return the first bonus of the panoplie',
      given: [14094, 14095],
      expected: [
        new Vitalite(100, 100),
        new Puissance(50, 50),
        new DommagesCritiques(20, 20)
      ]
    },
    {
      shouldReturn: 'should return the second bonus of the panoplie',
      given: [14094, 14095, 14096],
      expected: [
        new Vitalite(100, 100),
        new Puissance(50, 50),
        new DommagesCritiques(20, 20),
        new PA(1, 1)
      ]
    }
  ]
  listIdEquipementToTest.map(item => {
    describe('when listPanoplie has 1 element', () => {
      describe(`when listIdEquipement has ${item.given.toString()}`, () => {
        it(item.shouldReturn, () => {
          // Given
          const listPanoplie = [
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
                  [
                    new Vitalite(100, 100),
                    new Puissance(50, 50),
                    new DommagesCritiques(20, 20)
                  ]),
                new Bonus(
                  2,
                  [
                    new Vitalite(100, 100),
                    new Puissance(50, 50),
                    new DommagesCritiques(20, 20),
                    new PA(1, 1)
                  ])
              ],
              [
                14094,
                14095,
                14096
              ]
            )
          ]

          // When
          const result = Panoplie.getPanoplieBonus(listPanoplie, item.given)


          // Then
          expect(result).toEqual(item.expected)
        })
      })
    })
  })
})

describe('getPanoplieBonus for two panoplies', () => {
  const listIdEquipementToTest2 = [
    {
      shouldReturn: 'should return empty list',
      given: [14094, 17572],
      expected: []
    },
    {
      shouldReturn: 'should return the first bonus for the second panoplie',
      given: [14094, 17572, 17573],
      expected: [
        new Force(40, 40),
        new Intelligence(40, 40),
        new RetraitPM(5, 5),
      ]
    },
    {
      shouldReturn: 'should return the first bonus for each panoplie',
      given: [14094, 14095, 17572, 17573],
      expected: [
        new Vitalite(100, 100),
        new Puissance(50, 50),
        new DommagesCritiques(20, 20),
        new Force(40, 40),
        new Intelligence(40, 40),
        new RetraitPM(5, 5),
      ]
    },
    {
      shouldReturn: 'should return the first bonus for the first panoplie and the second bonus for the second panoplie',
      given: [14094, 14095, 17572, 17573, 17574],
      expected: [
        new Vitalite(100, 100),
        new Puissance(50, 50),
        new DommagesCritiques(20, 20),
        new Force(40, 40),
        new Intelligence(40, 40),
        new RetraitPM(5, 5),
        new PA(1, 1)
      ]
    }
  ]
  listIdEquipementToTest2.map(item => {
    describe('when listPanoplie has 1 element', () => {
      describe(`when listIdEquipement has ${item.given.toString()}`, () => {
        it(item.shouldReturn, () => {
          // Given
          const listPanoplie = [
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
                  [
                    new Vitalite(100, 100),
                    new Puissance(50, 50),
                    new DommagesCritiques(20, 20)
                  ]),
                new Bonus(
                  2,
                  [
                    new Vitalite(100, 100),
                    new Puissance(50, 50),
                    new DommagesCritiques(20, 20),
                    new PA(1, 1)
                  ])
              ],
              [
                14094,
                14095,
                14096
              ]
            ),
            new Panoplie(
              402,
              'Panoplie du Roi Joueur',
              200,
              'Panoplie',
              'https://s.ankama.com/www/static.ankama.com/dofus/renderer/look/7b317c38302c323132342c333334367c313d31363736353536342c' +
              '323d31363335353838332c333d31363737373138352c343d323931303036342c353d31343536313739397c3134307d/full/1/200_200-10.png',
              [
                new Bonus(
                  1,
                  [
                    new Force(40, 40),
                    new Intelligence(40, 40),
                    new RetraitPM(5, 5),
                  ]),
                new Bonus(
                  2,
                  [
                    new Force(40, 40),
                    new Intelligence(40, 40),
                    new RetraitPM(5, 5),
                    new PA(1, 1)
                  ])
              ],
              [
                17572,
                17573,
                17574
              ]
            )
          ]

          // When
          const result = Panoplie.getPanoplieBonus(listPanoplie, item.given)


          // Then
          expect(result).toEqual(item.expected)
        })
      })
    })
  })
})
