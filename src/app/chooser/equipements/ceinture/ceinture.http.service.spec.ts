import {inject, TestBed} from '@angular/core/testing'

import {CeintureHttpService} from './ceinture.http.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('CeintureHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CeintureHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    });
  });

  it('should be created', inject([CeintureHttpService], (service: CeintureHttpService) => {
    expect(service).toBeTruthy();
  }));
});
