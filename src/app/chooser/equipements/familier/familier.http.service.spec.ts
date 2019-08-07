import { TestBed, inject } from '@angular/core/testing';

import { FamilierHttpService } from './familier.http.service';

describe('EquipementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FamilierHttpService]
    });
  });

  it('should be created', inject([FamilierHttpService], (service: FamilierHttpService) => {
    expect(service).toBeTruthy();
  }));
});
