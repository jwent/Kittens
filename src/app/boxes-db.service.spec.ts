import { TestBed, inject } from '@angular/core/testing';

import { BoxesDbService } from './boxes-db.service';

describe('BoxesDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoxesDbService]
    });
  });

  it('should be created', inject([BoxesDbService], (service: BoxesDbService) => {
    expect(service).toBeTruthy();
  }));
});
