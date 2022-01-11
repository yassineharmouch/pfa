import { TestBed } from '@angular/core/testing';

import { TacheeService } from './tachee.service';

describe('TacheeService', () => {
  let service: TacheeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TacheeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
