import { TestBed } from '@angular/core/testing';

import { SizeResolver } from './size.resolver';

describe('SizeResolver', () => {
  let resolver: SizeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SizeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
