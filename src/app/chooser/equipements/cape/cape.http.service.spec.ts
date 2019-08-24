import {inject, TestBed} from '@angular/core/testing'

import {CapeHttpService} from './cape.http.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('CapeHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapeHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
  })

  it('should be created', inject([CapeHttpService], (service: CapeHttpService) => {
    expect(service).toBeTruthy()
  }))
})
