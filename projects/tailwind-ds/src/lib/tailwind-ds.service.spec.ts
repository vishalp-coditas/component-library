import { TestBed } from '@angular/core/testing';

import { TailwindDSService } from './tailwind-ds.service';

describe('TailwindDSService', () => {
  let service: TailwindDSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TailwindDSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
