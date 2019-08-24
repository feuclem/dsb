import {inject, TestBed} from '@angular/core/testing'

import {BottesHttpService} from './bottes.http.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('BottesHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BottesHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    })
  })

  it('should be created', inject([BottesHttpService], (service: BottesHttpService) => {
    expect(service).toBeTruthy()
  }))
})
