import {inject, TestBed} from '@angular/core/testing'

import {DamageCalculatorService} from './damage-calculator.service'

describe('DamageCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DamageCalculatorService]
    });
  });

  it('should be created', inject([DamageCalculatorService], (service: DamageCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
