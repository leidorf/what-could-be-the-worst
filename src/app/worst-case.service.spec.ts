import { TestBed } from '@angular/core/testing';

import { WorstCaseService } from './worst-case.service';

describe('WorstCaseService', () => {
  let service: WorstCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorstCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
