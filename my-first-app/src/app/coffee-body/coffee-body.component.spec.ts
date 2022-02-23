import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeBodyComponent } from './coffee-body.component';

describe('CoffeeBodyComponent', () => {
  let component: CoffeeBodyComponent;
  let fixture: ComponentFixture<CoffeeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
