import { TestBed } from '@angular/core/testing';

import { AnimeapiService } from './animeapi.service';

describe('AnimeapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimeapiService = TestBed.get(AnimeapiService);
    expect(service).toBeTruthy();
  });
});
