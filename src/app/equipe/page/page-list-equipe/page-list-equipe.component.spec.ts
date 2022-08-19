import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageListEquipeComponent} from './page-list-equipe.component';

describe('PageListEquipeComponent', () => {
  let component: PageListEquipeComponent;
  let fixture: ComponentFixture<PageListEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
