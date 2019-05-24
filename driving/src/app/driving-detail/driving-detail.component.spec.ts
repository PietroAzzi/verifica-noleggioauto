import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingDetailComponent } from './driving-detail.component';

describe('DrivingDetailComponent', () => {
  let component: DrivingDetailComponent;
  let fixture: ComponentFixture<DrivingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

