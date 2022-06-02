import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestinfoComponent } from './investinfo.component';

describe('InvestinfoComponent', () => {
  let component: InvestinfoComponent;
  let fixture: ComponentFixture<InvestinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
