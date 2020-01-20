import {inject, TestBed} from '@angular/core/testing'

import {GoogleUserService} from './google.user.service'

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleUserService]
    });
  });

  it('should be created', inject([GoogleUserService], (service: GoogleUserService) => {
    expect(service).toBeTruthy();
  }));
});
