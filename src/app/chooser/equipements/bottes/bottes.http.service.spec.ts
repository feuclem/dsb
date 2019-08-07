import { TestBed, inject } from '@angular/core/testing';

import { BottesHttpService } from './bottes.http.service';

describe('EquipementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BottesHttpService]
    });
  });

  it('should be created', inject([BottesHttpService], (service: BottesHttpService) => {
    expect(service).toBeTruthy();
  }));
});
