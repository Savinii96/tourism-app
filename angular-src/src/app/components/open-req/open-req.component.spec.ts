import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OpenReqComponent} from './open-req.component';

describe('OpenReqComponent', () => {
  let component: OpenReqComponent;
  let fixture: ComponentFixture<OpenReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenReqComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
