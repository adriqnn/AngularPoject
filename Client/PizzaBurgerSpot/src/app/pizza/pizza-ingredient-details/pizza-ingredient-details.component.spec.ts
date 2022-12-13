import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaIngredientDetailsComponent } from './pizza-ingredient-details.component';

describe('PizzaIngredientDetailsComponent', () => {
  let component: PizzaIngredientDetailsComponent;
  let fixture: ComponentFixture<PizzaIngredientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaIngredientDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaIngredientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
