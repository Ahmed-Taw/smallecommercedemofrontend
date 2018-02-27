import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantityComponent } from './productquantity.component';

describe('ProductquantityComponent', () => {
  let component: ProductQuantityComponent;
  let fixture: ComponentFixture<ProductQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
