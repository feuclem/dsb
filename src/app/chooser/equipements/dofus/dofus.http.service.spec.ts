import {inject, TestBed} from '@angular/core/testing'

import {DofusHttpService} from './dofus.http.service'

describe('EquipementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DofusHttpService]
    });
  });

  it('should be created', inject([DofusHttpService], (service: DofusHttpService) => {
    expect(service).toBeTruthy();
  }));
});
