import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptopbarComponent } from './apptopbar.component';

describe('ApptopbarComponent', () => {
  let component: ApptopbarComponent;
  let fixture: ComponentFixture<ApptopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
