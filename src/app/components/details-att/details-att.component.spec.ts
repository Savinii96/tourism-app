import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAttComponent } from './details-att.component';

describe('DetailsAttComponent', () => {
  let component: DetailsAttComponent;
  let fixture: ComponentFixture<DetailsAttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
