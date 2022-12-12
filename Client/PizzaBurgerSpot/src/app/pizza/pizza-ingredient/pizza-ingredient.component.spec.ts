import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaIngredientComponent } from './pizza-ingredient.component';

describe('PizzaIngredientComponent', () => {
  let component: PizzaIngredientComponent;
  let fixture: ComponentFixture<PizzaIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
