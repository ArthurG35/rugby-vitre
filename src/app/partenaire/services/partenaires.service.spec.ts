import { TestBed } from '@angular/core/testing';

import { PartenairesService } from './partenaires.service';

describe('PartenairesService', () => {
  let service: PartenairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartenairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
