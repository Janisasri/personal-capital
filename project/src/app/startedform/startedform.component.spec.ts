import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedformComponent } from './startedform.component';

describe('StartedformComponent', () => {
  let component: StartedformComponent;
  let fixture: ComponentFixture<StartedformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartedformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
