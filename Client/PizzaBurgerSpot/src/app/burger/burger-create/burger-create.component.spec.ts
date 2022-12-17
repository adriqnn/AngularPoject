import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerCreateComponent } from './burger-create.component';

describe('BurgerCreateComponent', () => {
  let component: BurgerCreateComponent;
  let fixture: ComponentFixture<BurgerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
