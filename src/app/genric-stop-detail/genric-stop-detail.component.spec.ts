import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenricStopDetailComponent } from './genric-stop-detail.component';

describe('GenricStopDetailComponent', () => {
  let component: GenricStopDetailComponent;
  let fixture: ComponentFixture<GenricStopDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenricStopDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenricStopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
