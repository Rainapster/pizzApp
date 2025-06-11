import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="bg-body-tertiary footer">
      <!-- Copyright -->
      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.05);"
      >
        © 2025 Copyright: PizzApp
      </div>
      <!-- Copyright -->
    </footer>
  `,
  styles: `
  footer{
    margin-top: 60px;
    width: 100%;
  }
  `,
})
export class FooterComponent {}
