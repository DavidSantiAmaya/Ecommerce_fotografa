import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpConvencionalComponent } from './lp-convencional.component';

describe('LpConvencionalComponent', () => {
  let component: LpConvencionalComponent;
  let fixture: ComponentFixture<LpConvencionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LpConvencionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpConvencionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
