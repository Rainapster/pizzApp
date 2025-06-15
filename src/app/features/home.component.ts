import { Component } from '@angular/core';
import { FooterComponent } from '../core/footer.component';
import { InfoCardComponent } from "../shared/info-card.component";

@Component({
  selector: 'app-home',
  imports: [InfoCardComponent],
  template: `
    <div class="container-fluid p-0 m-0">
      <div
        class="backgroundImg container-fluid d-flex justify-content-center align-items-center"
      >
        <p class="text-white fs-3  position-absolute top-0 left-0 right-0 d-flex align-items-center justify-content-center w-100 h-100">La pizza con lo Smoking</p>
      </div>

      <app-info-card
      title="Benvenuti nella nostra Pizzeria!"
      text="Lasciati tentare dalle nostre pizze.
            Siamo qui per offrirti un'esperienza culinaria indimenticabile.
            Realizzata con tanta cura e amore, è la prova indiscutibile che la
            felicità sta nelle piccole cose."
      image="/assets/napoletana.jpg"
      alt="Pizzeria"
            />
      <div class="imgScroll mt-5">
        <div class="overlay">
          <div class="container">
            <h2 class="text-center text-white">La nostra storia</h2>
            <p class="text-center text-white mx-5">
              La nostra pizzeria è un luogo dove la tradizione incontra la
              passione. Ogni pizza è preparata con ingredienti freschi e di alta
              qualità, seguendo le ricette tramandate di generazione in
              generazione.
            </p>
          </div>
        </div>
      </div>
      <!--reverse row -->
      <app-info-card
      title="Anche a domicilio!"
      text="contattaci per ordinare la tua pizza preferita e riceverla"
      image="/assets/domicilio.png"
      alt="Pizza a domicilio"
      [reverse]= "true"
      ><strong>+39 999 999 999</strong></app-info-card>
  `,
  styles: `
.backgroundImg {
  background-image: url('/assets/pizza.jpg');
  background-size: cover;
  background-position: center;
  height: 500px; 
  width: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  position: relative;
  margin-top: 95px;
}

.backgroundImg p {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 24px;
}
.imgScroll {
  align-items: center;
  background-image: url('/assets/pizzeria.jpeg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
}
.overlay {
  background-color: rgba(27, 25, 25, 0.85);
  height: 25%;
  width: 100%;
  z-index: 1;
  position: sticky;
  top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0px;
}
  `,
})
export class HomeComponent {}
