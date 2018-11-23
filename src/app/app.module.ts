import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { ComidasService } from './servicios/comidas.service';
//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ComidasComponent } from './components/comidas/comidas.component';
import { ComidaComponent } from './components/comida/comida.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ComidaTarjetaComponent } from './components/comida-tarjeta/comida-tarjeta.component';
import { RegistrarComponent } from './components/registrar/registrar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BuscadorComponent,
    ComidaComponent,
    ComidaTarjetaComponent,
    ComidasComponent,
    NavbarComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ComidasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
