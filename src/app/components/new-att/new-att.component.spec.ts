import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewAttComponent} from './new-att.component';

describe('NewAttComponent', () => {
  let component: NewAttComponent;
  let fixture: ComponentFixture<NewAttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewAttComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
