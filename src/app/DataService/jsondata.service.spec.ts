import { TestBed } from '@angular/core/testing';

import { JSONDataService } from './jsondata.service';

describe('JSONDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JSONDataService = TestBed.get(JSONDataService);
    expect(service).toBeTruthy();
  });
});
