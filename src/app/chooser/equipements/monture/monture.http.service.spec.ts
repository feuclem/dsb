import { TestBed, inject } from '@angular/core/testing';

import { MontureHttpService } from './monture.http.service';

describe('EquipementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MontureHttpService]
    });
  });

  it('should be created', inject([MontureHttpService], (service: MontureHttpService) => {
    expect(service).toBeTruthy();
  }));
});
