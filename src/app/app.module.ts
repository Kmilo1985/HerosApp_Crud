import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// servicios
import { HeroesService } from './servicios/servicios.service';

// Rutas
import { APP_ROUTING } from './app.routes';


// components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    HeroesComponent,
    HomeComponent,
    NavbarComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
