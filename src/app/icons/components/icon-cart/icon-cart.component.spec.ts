import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCartComponent } from './icon-cart.component';

describe('IconCartComponent', () => {
  let component: IconCartComponent;
  let fixture: ComponentFixture<IconCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
