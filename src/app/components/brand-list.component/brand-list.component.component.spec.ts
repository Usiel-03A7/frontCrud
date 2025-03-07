import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandListComponentComponent } from './brand-list.component.component';

describe('BrandListComponentComponent', () => {
  let component: BrandListComponentComponent;
  let fixture: ComponentFixture<BrandListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
