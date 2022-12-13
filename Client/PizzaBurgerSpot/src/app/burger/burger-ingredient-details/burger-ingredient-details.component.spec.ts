import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerIngredientDetailsComponent } from './burger-ingredient-details.component';

describe('BurgerIngredientDetailsComponent', () => {
  let component: BurgerIngredientDetailsComponent;
  let fixture: ComponentFixture<BurgerIngredientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerIngredientDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerIngredientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
