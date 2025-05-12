import { TestBed } from '@angular/core/testing';
import { ProfesionalService } from './product.service';


describe('ProductService', () => {
  let service: ProfesionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
