import { Component } from '@angular/core';

@Component({
  selector: 'app-file-not-found',
  imports: [],
  template: `
  <div class="container-fluid background-container">
      <div class="backgound-image"></div>
  </div>
  `,
  styles: `
    .background-container {
      padding-top: 95px;
    }
    .backgound-image{
      background-image: url('/assets/404.png');
      height: 70vh;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  `
})
export class FileNotFoundComponent {

}
