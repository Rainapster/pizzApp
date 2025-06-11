import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar.component';
import { FooterComponent } from './core/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="main-container">
      <app-navbar />
      <router-outlet />
    </div>
    <app-footer />
  `,
  styles: [],
})
export class AppComponent {
  title = 'pizzapp';
}
