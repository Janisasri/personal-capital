import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingplannerComponent } from './savingplanner.component';

describe('SavingplannerComponent', () => {
  let component: SavingplannerComponent;
  let fixture: ComponentFixture<SavingplannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingplannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
