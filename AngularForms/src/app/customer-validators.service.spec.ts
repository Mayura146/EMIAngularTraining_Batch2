import { TestBed } from '@angular/core/testing';

import { CustomerValidatorsService } from './customer-validators.service';

describe('CustomerValidatorsService', () => {
  let service: CustomerValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
