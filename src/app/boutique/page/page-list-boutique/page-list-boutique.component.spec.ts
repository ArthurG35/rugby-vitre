import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListBoutiqueComponent } from './page-list-boutique.component';

describe('PageListBoutiqueComponent', () => {
  let component: PageListBoutiqueComponent;
  let fixture: ComponentFixture<PageListBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListBoutiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
