import { TestBed, inject } from '@angular/core/testing';

import { CeintureHttpService } from './ceinture.http.service';

describe('EquipementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CeintureHttpService]
    });
  });

  it('should be created', inject([CeintureHttpService], (service: CeintureHttpService) => {
    expect(service).toBeTruthy();
  }));
});
