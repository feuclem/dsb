import {inject, TestBed} from '@angular/core/testing'

import {MontureHttpService} from './monture.http.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('MontureHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MontureHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
  })

  it('should be created', inject([MontureHttpService], (service: MontureHttpService) => {
    expect(service).toBeTruthy()
  }))
})
