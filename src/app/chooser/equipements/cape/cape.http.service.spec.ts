import { TestBed, inject } from '@angular/core/testing';

import { CapeHttpService } from './cape.http.service';

describe('EquipementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapeHttpService]
    });
  });

  it('should be created', inject([CapeHttpService], (service: CapeHttpService) => {
    expect(service).toBeTruthy();
  }));
});
