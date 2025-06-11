import { Component } from '@angular/core';

@Component({
  selector: 'app-file-not-found',
  imports: [],
  template: `
  <div class="container-fluid backgound-image"></div>
  `,
  styles: `
    .backgound-image{
      background-image: url('/assets/404.png');
      height: 650px;
      background-position: center;
    }
  `
})
export class FileNotFoundComponent {

}
