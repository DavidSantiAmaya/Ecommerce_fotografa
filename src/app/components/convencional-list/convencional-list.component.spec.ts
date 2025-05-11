import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvencionalListComponent } from './convencional-list.component';

describe('ConvencionalListComponent', () => {
  let component: ConvencionalListComponent;
  let fixture: ComponentFixture<ConvencionalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvencionalListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvencionalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
