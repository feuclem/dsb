import {inject, TestBed} from '@angular/core/testing'

import {CoiffeHttpService} from './coiffe.http.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('CoiffeHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoiffeHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
  })

  it('should be created', inject([CoiffeHttpService], (service: CoiffeHttpService) => {
    expect(service).toBeTruthy()
  }))
})
