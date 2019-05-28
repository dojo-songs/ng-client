import { TestBed } from '@angular/core/testing';

import { SingleSongService } from './single-song.service';

describe('SingleSongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleSongService = TestBed.get(SingleSongService);
    expect(service).toBeTruthy();
  });
});
