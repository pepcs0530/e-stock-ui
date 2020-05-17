import { TestBed } from '@angular/core/testing';

import { CafeHistoryService } from './cafe-history.service';

describe('CafeHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CafeHistoryService = TestBed.get(CafeHistoryService);
    expect(service).toBeTruthy();
  });
});
