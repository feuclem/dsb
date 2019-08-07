import { TestBed, inject } from '@angular/core/testing';

import { CharacteritiqueService } from './characteritique.service';

describe('CharacteritiqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacteritiqueService]
    });
  });

  it('should be created', inject([CharacteritiqueService], (service: CharacteritiqueService) => {
    expect(service).toBeTruthy();
  }));
});
