import {inject, TestBed} from '@angular/core/testing'

import {PanoplieService} from './panoplie.service'

describe('PanoplieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanoplieService]
    });
  });

  it('should be created', inject([PanoplieService], (service: PanoplieService) => {
    expect(service).toBeTruthy();
  }));
});
