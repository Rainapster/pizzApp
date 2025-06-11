import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CardComponent } from '../shared/cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [CardComponent, CommonModule],
  template: `
    <app-cards></app-cards>
  `,
  styles: ``
})
export class OrderComponent {

}
