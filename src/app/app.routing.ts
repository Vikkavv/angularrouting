import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home-component/home-component";
import { CineComponent } from "./components/cine-component/cine-component";
import { MusicaComponent } from "./components/musica-component/musica-component";
import { NotFoundComponent } from "./components/not-found-component/not-found-component";
import { NumeroDobleComponent } from "./components/numero-doble-component/numero-doble-component";
import { TablaMultiplicarRuta } from "./components/tabla-multiplicar-ruta/tabla-multiplicar-ruta";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "cine", component: CineComponent},
    {path: "musica", component: MusicaComponent},
    {path: "numerodoble", component: NumeroDobleComponent},
    {path: "numerodoble/:numero", component: NumeroDobleComponent},
    {path: "tablamultiplcar/:numero", component: TablaMultiplicarRuta},



    {path: "**", component: NotFoundComponent}
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
