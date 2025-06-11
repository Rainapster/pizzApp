import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid d-flex align-items-center">
        <div class="d-flex align-items-center">
          <img
            src="assets/logo.jpeg"
            height="80"
            width="auto"
            alt="logo pizzeria"
          />
          <p class="ms-3 mb-0">MenùPizza</p>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-start"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/home"
                routerLinkActive="active"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/order"
                routerLinkActive="active"
                >Order</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLink="/cart"
                routerLinkActive="active"
                >Cart</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: ``,
})
export class NavbarComponent {}
