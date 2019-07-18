import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttComponent } from './edit-att.component';

describe('EditAttComponent', () => {
  let component: EditAttComponent;
  let fixture: ComponentFixture<EditAttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
