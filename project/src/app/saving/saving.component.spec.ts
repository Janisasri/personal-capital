import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingComponent } from './saving.component';

describe('SavingComponent', () => {
  let component: SavingComponent;
  let fixture: ComponentFixture<SavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
