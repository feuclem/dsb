import {inject, TestBed} from '@angular/core/testing'

import {AnneauHttpService} from './anneau.http.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('AnneauHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnneauHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
  })

  it('should be created', inject([AnneauHttpService], (service: AnneauHttpService) => {
    expect(service).toBeTruthy()
  }))
})
