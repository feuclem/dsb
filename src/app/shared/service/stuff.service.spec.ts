import {TestBed} from '@angular/core/testing'

import {StuffService} from './stuff.service'

describe('StuffService', () => {
  let stuffService = null
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StuffService]
    })

    stuffService = TestBed.get(StuffService)
  })
})
