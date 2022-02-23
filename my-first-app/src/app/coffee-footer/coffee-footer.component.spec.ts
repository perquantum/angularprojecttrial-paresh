import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeFooterComponent } from './coffee-footer.component';

describe('CoffeeFooterComponent', () => {
  let component: CoffeeFooterComponent;
  let fixture: ComponentFixture<CoffeeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
