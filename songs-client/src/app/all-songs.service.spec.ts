import { TestBed } from '@angular/core/testing';

import { AllSongsService } from './all-songs.service';

describe('AllSongsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllSongsService = TestBed.get(AllSongsService);
    expect(service).toBeTruthy();
  });
});
