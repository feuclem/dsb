import {inject, TestBed} from '@angular/core/testing'

import {TropheeHttpService} from './trophee.http.service'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {StatistiquesServiceMock} from '../../../shared/service/statistiques.service.mock'

describe('TropheeHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TropheeHttpService, {provide: StatistiquesService, useClass: StatistiquesServiceMock}]
    });
  });

  it('should be created', inject([TropheeHttpService], (service: TropheeHttpService) => {
    expect(service).toBeTruthy();
  }));
});
