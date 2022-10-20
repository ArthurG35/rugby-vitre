import { TestBed } from '@angular/core/testing';

import { PartenaireResolver } from './partenaire.resolver';

describe('PartenaireResolver', () => {
  let resolver: PartenaireResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PartenaireResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
