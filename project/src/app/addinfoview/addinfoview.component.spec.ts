import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinfoviewComponent } from './addinfoview.component';

describe('AddinfoviewComponent', () => {
  let component: AddinfoviewComponent;
  let fixture: ComponentFixture<AddinfoviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinfoviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinfoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
