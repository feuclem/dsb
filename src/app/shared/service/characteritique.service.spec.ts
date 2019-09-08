import {inject, TestBed} from '@angular/core/testing'

import {CharacteristiqueService} from './characteristique.service'

describe('CharacteritiqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacteristiqueService]
    })
  })

  it('should be created', inject([CharacteristiqueService], (service: CharacteristiqueService) => {
    expect(service).toBeTruthy()
  }))
})
