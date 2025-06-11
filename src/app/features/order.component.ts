import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CardComponent } from '../shared/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [CardComponent, CommonModule],
  template: `
    <app-card></app-card>
  `,
  styles: ``
})
export class OrderComponent {

}
