import {inject, TestBed} from '@angular/core/testing'

import {BouclierHttpService} from './bouclier.http.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('BouclierHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BouclierHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
  })

  it('should be created', inject([BouclierHttpService], (service: BouclierHttpService) => {
    expect(service).toBeTruthy()
  }))
})
