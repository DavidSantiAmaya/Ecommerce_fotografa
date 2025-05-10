import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpProfesionalComponent } from './lp-profesional.component';

describe('LpProfesionalComponent', () => {
  let component: LpProfesionalComponent;
  let fixture: ComponentFixture<LpProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LpProfesionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
