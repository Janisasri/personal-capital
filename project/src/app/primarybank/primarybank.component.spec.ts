import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarybankComponent } from './primarybank.component';

describe('PrimarybankComponent', () => {
  let component: PrimarybankComponent;
  let fixture: ComponentFixture<PrimarybankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimarybankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarybankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
