import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBookmarkComponent } from './product-bookmark.component';

describe('ProductBookmarkComponent', () => {
  let component: ProductBookmarkComponent;
  let fixture: ComponentFixture<ProductBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBookmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
