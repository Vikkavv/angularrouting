import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { CineComponent } from './components/cine-component/cine-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { appRoutingProvider, routing } from './app.routing';
import { MenuComponent } from './components/menu-component/menu-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { TablaMultiplicarRuta } from './components/tabla-multiplicar-ruta/tabla-multiplicar-ruta';
import { MenuTablaMultiplicar } from './components/menu-tabla-multiplicar/menu-tabla-multiplicar';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    CineComponent,
    MusicaComponent,
    NotFoundComponent,
    MenuComponent,
    NumeroDobleComponent,
    TablaMultiplicarRuta,
    MenuTablaMultiplicar
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider],
  bootstrap: [App],
})
export class AppModule {}
