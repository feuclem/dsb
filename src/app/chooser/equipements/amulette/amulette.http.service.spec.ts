import { TestBed, inject } from '@angular/core/testing';

import { AmuletteHttpService } from './amulette.http.service';

describe('EquipementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmuletteHttpService]
    });
  });

  it('should be created', inject([AmuletteHttpService], (service: AmuletteHttpService) => {
    expect(service).toBeTruthy();
  }));
});
