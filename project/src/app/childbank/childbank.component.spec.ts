import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbankComponent } from './childbank.component';

describe('ChildbankComponent', () => {
  let component: ChildbankComponent;
  let fixture: ComponentFixture<ChildbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
