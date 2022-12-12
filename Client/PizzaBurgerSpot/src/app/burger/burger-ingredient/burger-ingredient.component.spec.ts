import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerIngredientComponent } from './burger-ingredient.component';

describe('BurgerIngredientComponent', () => {
  let component: BurgerIngredientComponent;
  let fixture: ComponentFixture<BurgerIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
