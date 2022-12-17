import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerDeleteComponent } from './burger-delete.component';

describe('BurgerDeleteComponent', () => {
  let component: BurgerDeleteComponent;
  let fixture: ComponentFixture<BurgerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
