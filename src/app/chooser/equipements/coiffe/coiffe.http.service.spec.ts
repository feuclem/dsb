import { TestBed, inject } from '@angular/core/testing';

import { CoiffeHttpService } from './coiffe.http.service';

describe('EquipementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoiffeHttpService]
    });
  });

  it('should be created', inject([CoiffeHttpService], (service: CoiffeHttpService) => {
    expect(service).toBeTruthy();
  }));
});
