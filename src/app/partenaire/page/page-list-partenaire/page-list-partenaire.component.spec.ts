import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListPartenaireComponent } from './page-list-partenaire.component';

describe('PageListPartenaireComponent', () => {
  let component: PageListPartenaireComponent;
  let fixture: ComponentFixture<PageListPartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListPartenaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
