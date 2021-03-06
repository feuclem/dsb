import {TestBed} from '@angular/core/testing'

import {PanoplieService} from './panoplie.service'
import {DommagesCritiques, Force, Intelligence, PA, Puissance, RetraitPM, Vitalite} from '../entities/Statistique'
import {Panoplie} from '../entities/Panoplie'
import {Bonus} from '../entities/Bonus'
import {Equipement} from '../entities/Equipement'
import {StuffService} from './stuff.service'
import {StatistiquesService} from './statistiques.service'
import {StatistiquesServiceMock} from './statistiques.service.mock'

describe('PanoplieService', () => {
  let panoplieService = null
  let stuffService = null
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanoplieService, StuffService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })

    panoplieService = TestBed.get(PanoplieService)
    stuffService = TestBed.get(StuffService)
  })

  describe('getPanoplieBonus', () => {
    describe('for one panoplie', () => {
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
      listIdEquipementToTest.forEach(item => {
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
                  ],
                  [
                    new Equipement(
                      1,
                      'Amulette du Strigide',
                      1,
                      'Amulette',
                      'AmuletteduStrigide.png',
                      [
                        new Force(1, 1)
                      ],
                      1
                    )
                  ])
              ]
              panoplieService.listPanoplie = listPanoplie

              // When
              const result = panoplieService.getPanoplieBonus(item.given)

              // Then
              expect(result).toEqual(item.expected)
            })
          })
        })
      })
    })

    describe('for two panoplies', () => {
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
                  ], [
                    new Equipement(
                      1,
                      'Amulette du Strigide',
                      1,
                      'Amulette',
                      'AmuletteduStrigide.png',
                      [
                        new Force(1, 1)
                      ],
                      1
                    )
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
                  ], [
                    new Equipement(
                      1,
                      'Amulette du Strigide',
                      1,
                      'Amulette',
                      'AmuletteduStrigide.png',
                      [
                        new Force(1, 1)
                      ],
                      1
                    )
                  ]
                )
              ]
              panoplieService.listPanoplie = listPanoplie

              // When
              const result = panoplieService.getPanoplieBonus(item.given)

              // Then
              expect(result).toEqual(item.expected)
            })
          })
        })
      })
    })
  })

  describe('getFullPanoplie', () => {
    describe('when setId is matching', () => {
      it('should return the given equipments', () => {
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
            ],
            [
              new Equipement(
                1,
                'Amulette du Strigide',
                1,
                'Amulette',
                'AmuletteduStrigide.png',
                [
                  new Force(1, 1)
                ],
                1
              ),
              new Equipement(
                1,
                'Bottes du Strigide',
                1,
                'Bottes',
                'BottesduStrigide.png',
                [
                  new Force(1, 1)
                ],
                1
              ),
              new Equipement(
                1,
                'Ceinture du Strigide',
                1,
                'Ceinture',
                'CeintureduStrigide.png',
                [
                  new Force(1, 1)
                ],
                1
              )
            ])
        ]
        panoplieService.listPanoplie = listPanoplie

        // When
        const result = panoplieService.getFullPanoplie(274)

        // Then
        expect(result).toEqual([
          new Equipement(
            1,
            'Amulette du Strigide',
            1,
            'Amulette',
            'AmuletteduStrigide.png',
            [
              new Force(1, 1)
            ],
            1
          ),
          new Equipement(
            1,
            'Bottes du Strigide',
            1,
            'Bottes',
            'BottesduStrigide.png',
            [
              new Force(1, 1)
            ],
            1
          ),
          new Equipement(
            1,
            'Ceinture du Strigide',
            1,
            'Ceinture',
            'CeintureduStrigide.png',
            [
              new Force(1, 1)
            ],
            1
          )
        ])
      })
    })
  })

  describe('setPanoplieToStuff', () => {
    describe('when one amulette is added', () => {
      it('should call updateAmulette', () => {
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
              14094
            ],
            [
              new Equipement(
                1,
                'Amulette du Strigide',
                1,
                'Amulette',
                'AmuletteduStrigide.png',
                [
                  new Force(1, 1)
                ],
                1
              )
            ])
        ]
        panoplieService.listPanoplie = listPanoplie
        const spy = spyOn(stuffService, 'updateAmulette')

        // When
        panoplieService.setPanoplieToStuff(274)

        // Then
        expect(spy).toHaveBeenCalledWith(new Equipement(
          1,
          'Amulette du Strigide',
          1,
          'Amulette',
          'AmuletteduStrigide.png',
          [
            new Force(1, 1)
          ],
          1
          )
        )
      })
    })

    describe('when one anneau1 is added', () => {
      it('should call updateAnneau1', () => {
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
              14094
            ],
            [
              new Equipement(
                1,
                'Anneau du Strigide',
                1,
                'Anneau',
                'AnneauduStrigide.png',
                [
                  new Force(1, 1)
                ],
                1
              )
            ])
        ]
        panoplieService.listPanoplie = listPanoplie
        const spy = spyOn(stuffService, 'updateAnneau1')

        // When
        panoplieService.setPanoplieToStuff(274)

        // Then
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenCalledWith(new Equipement(
          1,
          'Anneau du Strigide',
          1,
          'Anneau',
          'AnneauduStrigide.png',
          [
            new Force(1, 1)
          ],
          1
          )
        )
      })
    })

    describe('when one amulette, one anneau1, one ceinture, one coiffe is added', () => {
      it('should call every stuff updater', () => {
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
            ],
            [
              new Equipement(
                1,
                'Amulette du Strigide',
                1,
                'Amulette',
                'AmuletteduStrigide.png',
                [
                  new Force(1, 1)
                ],
                1
              ),
              new Equipement(
                1,
                'Anneau du Strigide',
                1,
                'Anneau',
                'AnneauduStrigide.png',
                [
                  new Force(1, 1)
                ],
                1
              ),
              new Equipement(
                1,
                'Ceinture du Strigide',
                1,
                'Ceinture',
                'CeintureduStrigide.png',
                [
                  new Force(1, 1)
                ],
                1
              ),
              new Equipement(
                1,
                'Coiffe du Strigide',
                1,
                'Chapeau',
                'CoiffeduStrigide.png',
                [
                  new Force(1, 1)
                ],
                1
              )
            ])
        ]
        panoplieService.listPanoplie = listPanoplie

        const spyAmulette = spyOn(stuffService, 'updateAmulette')
        const spyAnneau1 = spyOn(stuffService, 'updateAnneau1')
        const spyAnneau2 = spyOn(stuffService, 'updateAnneau2')
        const spyCeinture = spyOn(stuffService, 'updateCeinture')
        const spyCoiffe = spyOn(stuffService, 'updateCoiffe')

        // When
        panoplieService.setPanoplieToStuff(274)

        // Then
        expect(spyAmulette).toHaveBeenCalledTimes(1)
        expect(spyAmulette).toHaveBeenCalledWith(new Equipement(
          1,
          'Amulette du Strigide',
          1,
          'Amulette',
          'AmuletteduStrigide.png',
          [
            new Force(1, 1)
          ],
          1
        ))
        expect(spyAnneau1).toHaveBeenCalledTimes(1)
        expect(spyAnneau1).toHaveBeenCalledWith(new Equipement(
          1,
          'Anneau du Strigide',
          1,
          'Anneau',
          'AnneauduStrigide.png',
          [
            new Force(1, 1)
          ],
          1
        ))
        expect(spyCeinture).toHaveBeenCalledTimes(1)
        expect(spyCeinture).toHaveBeenCalledWith(new Equipement(
          1,
          'Ceinture du Strigide',
          1,
          'Ceinture',
          'CeintureduStrigide.png',
          [
            new Force(1, 1)
          ],
          1
        ))
        expect(spyCoiffe).toHaveBeenCalledTimes(1)
        expect(spyCoiffe).toHaveBeenCalledWith(new Equipement(
          1,
          'Coiffe du Strigide',
          1,
          'Chapeau',
          'CoiffeduStrigide.png',
          [
            new Force(1, 1)
          ],
          1
          )
        )
        expect(spyAnneau2).toHaveBeenCalledTimes(0)
        expect(spyAnneau2).not.toHaveBeenCalled()
      })
    })
  })
})
