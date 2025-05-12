import { TestBed } from '@angular/core/testing';

import { ConvencionalService } from './convencional.service';

describe('ConvencionalService', () => {
  let service: ConvencionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvencionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
