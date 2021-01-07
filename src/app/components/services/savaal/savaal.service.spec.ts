import { TestBed } from '@angular/core/testing';

import { SavaalService } from './savaal.service';

describe('SavaalService', () => {
  let service: SavaalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavaalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
