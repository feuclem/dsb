import {inject, TestBed} from '@angular/core/testing'

import {AmuletteHttpService} from './amulette.http.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('AmuletteHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmuletteHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
  })

  it('should be created', inject([AmuletteHttpService], (service: AmuletteHttpService) => {
    expect(service).toBeTruthy()
  }))
})
