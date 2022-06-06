import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalcapitalComponent } from './personalcapital.component';

describe('PersonalcapitalComponent', () => {
  let component: PersonalcapitalComponent;
  let fixture: ComponentFixture<PersonalcapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalcapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalcapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
