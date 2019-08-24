import {inject, TestBed} from '@angular/core/testing'

import {FamilierHttpService} from './familier.http.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('FamilierHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FamilierHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
  })

  it('should be created', inject([FamilierHttpService], (service: FamilierHttpService) => {
    expect(service).toBeTruthy()
  }))
})
