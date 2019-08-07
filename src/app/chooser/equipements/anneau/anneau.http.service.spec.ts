import { TestBed, inject } from '@angular/core/testing';

import { AnneauHttpService } from './anneau.http.service';

describe('EquipementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnneauHttpService]
    });
  });

  it('should be created', inject([AnneauHttpService], (service: AnneauHttpService) => {
    expect(service).toBeTruthy();
  }));
});
