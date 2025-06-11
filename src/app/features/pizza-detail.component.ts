import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../models/pizza.models';
import { ProductService } from '../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pizza-detail',
  imports: [CommonModule],
  template: `
  <div class="container">
    <div *ngIf="pizza" class="pizza-detail">
      <h2>{{ pizza.name }}</h2>
      <img [src]="pizza.image" alt="{{ pizza.name }}" class="img-fluid" />
      <p>{{ pizza.description }}</p>
    </div>
    <button class="btn btn-secondary" (click)="goBack()">Go Back</button>
  </div>
   `,
  styles: `
    .pizza-detail {
      border: 1px solid #ccc;
      border-radius: 10px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      height: auto;
      padding: 16px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 24px;
    }
    .container{
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
})
export class PizzaDetailComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private location = inject(Location);

  pizza: Pizza | undefined;

  constructor() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.productService.getProductById(id).subscribe((pizza) => {
        this.pizza = pizza;
      });
    });
  }
  goBack(): void {
    this.location.back();
  }

}
