import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorybylistComponent } from './categorybylist.component';

describe('CategorybylistComponent', () => {
  let component: CategorybylistComponent;
  let fixture: ComponentFixture<CategorybylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorybylistComponent]
    });
    fixture = TestBed.createComponent(CategorybylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
