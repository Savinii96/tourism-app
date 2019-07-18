import { TestBed } from '@angular/core/testing';

import { NewAttService } from './new-att.service';

describe('NewAttService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewAttService = TestBed.get(NewAttService);
    expect(service).toBeTruthy();
  });
});
