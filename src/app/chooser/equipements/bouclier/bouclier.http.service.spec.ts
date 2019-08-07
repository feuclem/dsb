import { TestBed, inject } from '@angular/core/testing';

import { BouclierHttpService } from './bouclier.http.service';

describe('EquipementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BouclierHttpService]
    });
  });

  it('should be created', inject([BouclierHttpService], (service: BouclierHttpService) => {
    expect(service).toBeTruthy();
  }));
});
