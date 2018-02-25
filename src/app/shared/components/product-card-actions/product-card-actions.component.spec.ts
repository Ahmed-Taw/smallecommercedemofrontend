import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardActionsComponent } from './product-card-actions.component';

describe('ProductCardActionsComponent', () => {
  let component: ProductCardActionsComponent;
  let fixture: ComponentFixture<ProductCardActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
