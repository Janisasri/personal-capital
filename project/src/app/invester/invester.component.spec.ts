import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesterComponent } from './invester.component';

describe('InvesterComponent', () => {
  let component: InvesterComponent;
  let fixture: ComponentFixture<InvesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
