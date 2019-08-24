import {inject, TestBed} from '@angular/core/testing'

import {DofusHttpService} from './dofus.http.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('DofusHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DofusHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
  })

  it('should be created', inject([DofusHttpService], (service: DofusHttpService) => {
    expect(service).toBeTruthy()
  }))
})
