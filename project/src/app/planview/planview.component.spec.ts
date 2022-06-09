import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanviewComponent } from './planview.component';

describe('PlanviewComponent', () => {
  let component: PlanviewComponent;
  let fixture: ComponentFixture<PlanviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
