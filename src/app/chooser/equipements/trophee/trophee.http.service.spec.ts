import {inject, TestBed} from '@angular/core/testing'

import {TropheeHttpService} from './trophee.http.service'

describe('EquipementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TropheeHttpService]
    });
  });

  it('should be created', inject([TropheeHttpService], (service: TropheeHttpService) => {
    expect(service).toBeTruthy();
  }));
});
