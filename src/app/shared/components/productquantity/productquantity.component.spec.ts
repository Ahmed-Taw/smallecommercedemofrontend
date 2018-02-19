import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductquantityComponent } from './productquantity.component';

describe('ProductquantityComponent', () => {
  let component: ProductquantityComponent;
  let fixture: ComponentFixture<ProductquantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductquantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
