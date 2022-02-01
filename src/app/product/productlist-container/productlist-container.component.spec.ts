import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistContainerComponent } from './productlist-container.component';

describe('ProductlistContainerComponent', () => {
  let component: ProductlistContainerComponent;
  let fixture: ComponentFixture<ProductlistContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
