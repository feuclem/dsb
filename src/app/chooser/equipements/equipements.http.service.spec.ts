import { TestBed, inject } from '@angular/core/testing';

import { EquipementsHttpService } from './equipements.http.service';

describe('EquipementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipementsHttpService]
    });
  });

  it('should be created', inject([EquipementsHttpService], (service: EquipementsHttpService) => {
    expect(service).toBeTruthy();
  }));
});
