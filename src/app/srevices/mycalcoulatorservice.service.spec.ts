import { TestBed } from '@angular/core/testing';

import { MycalcoulatorserviceService } from './mycalcoulatorservice.service';

describe('MycalcoulatorserviceService', () => {
  let service: MycalcoulatorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycalcoulatorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
