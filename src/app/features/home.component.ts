import { Component } from '@angular/core';
import { FooterComponent } from '../core/footer.component';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div class="container-fluid p-0 m-0">
      <div
        class="backgroundImg d-flex justify-content-center align-items-center"
      >
        <p class="text-white fs-3">La pizza con lo Smoking</p>
      </div>

      <div class="row mt-5 justify-content-center">
        <div
          class="col-12 col-md-6 text-center d-flex flex-column justify-content-center align-items-center"
        >
          <h1>Benvenuti nella nostra Pizzeria!</h1>
          <p>
            Lasciati tentare dalle nostre pizze.<br />
            Siamo qui per offrirti un'esperienza culinaria indimenticabile.<br />
            Realizzata con tanta cura e amore, è la prova indiscutibile che la
            felicità sta nelle piccole cose.
          </p>
        </div>

        <div class="col-12 col-md-6 d-flex justify-content-center mt-4">
          <img
            src="assets/napoletana.jpg"
            class="img-fluid rounded shadow"
            alt="Pizza napoletana"
          />
        </div>
      </div>
      <div class="imgScroll mt-5">
        <div class="overlay">
          <h2 class="text-center text-white pt-5">La nostra storia</h2>
          <p class="text-center text-white px-5">
            La nostra pizzeria è un luogo dove la tradizione incontra la
            passione. Ogni pizza è preparata con ingredienti freschi e di alta
            qualità, seguendo le ricette tramandate di generazione in
            generazione.
          </p>
        </div>
      </div>
      <!--reverse row -->
      <div class="row mt-5 justify-content-center flex-row-reverse">
        <div
          class="col-12 col-md-6 text-center d-flex flex-column justify-content-center align-items-center"
        >
          <h1>Anche a domicilio!</h1>
          <p>contattaci per ordinare la tua pizza preferita e riceverla</p>
          <strong>+39 999 999 999</strong>
        </div>

        <div class="col-12 col-md-6 d-flex justify-content-center mt-4">
          <img
            src="assets/domicilio.png"
            class="img-fluid rounded shadow"
            alt="domicilio pizza"
          />
        </div>
      </div>
    </div>
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
}

.backgroundImg p {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 24px;
}
.imgScroll {
  padding-top: 90px;
  align-items: center;
  background-image: url('/assets/pizzeria.jpeg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
}
.overlay {
  background-color: rgba(27, 25, 25, 0.85);
  height: 30%;
  width: 100%;
  z-index: 1;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}
  `,
})
export class HomeComponent {}
