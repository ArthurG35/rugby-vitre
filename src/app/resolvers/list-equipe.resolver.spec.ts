import { TestBed } from '@angular/core/testing';

import { ListEquipeResolver } from './list-equipe.resolver';

describe('ListEquipeResolver', () => {
  let resolver: ListEquipeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListEquipeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
