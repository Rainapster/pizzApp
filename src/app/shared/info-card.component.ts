import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  imports: [CommonModule],
  template: `
 <div class="row mt-5 mx-auto container" [ngClass]="{'flex-row-reverse': reverse}">
      <div class="col-12 col-md-6 text-center d-flex flex-column justify-content-center align-items-center">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
        <ng-content></ng-content>
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center mt-4">
        <img [src]="image" class="img-fluid rounded shadow" [alt]="alt" />
      </div>
    </div>
  `,
  styles: ``
})
export class InfoCardComponent {
  @Input() title = '';
  @Input() text = '';
  @Input() image = '';
  @Input() alt = '';
  @Input() reverse= false;
}
