import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BurgerService } from '../burger.service';

@Component({
  selector: 'app-burger-delete',
  templateUrl: './burger-delete.component.html',
  styleUrls: ['./burger-delete.component.scss']
})
export class BurgerDeleteComponent implements OnInit {

  constructor(private router: Router, private burgerService: BurgerService, private route: ActivatedRoute) {
  };

  ngOnInit(): void {
    const params: string = this.route.snapshot.params['id'];
    const paramsDetails = params.split('[!&%$!]');
    const itemId = paramsDetails[0];
    const ownerId = paramsDetails[1];
    const userId = paramsDetails[2];
    if(ownerId == userId){
      this.burgerService.deleteBurger(itemId).subscribe({
        next: () => {
          this.router.navigate(['/burgers']);
        },
        error: (err) => {
          this.router.navigate(['/']); 
        } 
      });
    }else{
      this.router.navigate(['/']); 
    };
  };
};