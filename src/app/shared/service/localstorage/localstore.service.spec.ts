import {inject, TestBed} from '@angular/core/testing'

import {LocalStoreService} from './local-store.service'

describe('LocalstoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStoreService]
    });
  });

  it('should be created', inject([LocalStoreService], (service: LocalStoreService) => {
    expect(service).toBeTruthy();
  }));
});
