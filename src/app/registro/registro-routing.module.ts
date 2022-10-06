import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {PeliculasComponent} from './pages/peliculas/peliculas.component';
import {DescripcionComponent} from './pages/descripcion/descripcion.component'
import {NaveComponent} from './pages/nave/nave.component'
import {PersonajesComponent} from './pages/personajes/personajes.component'

const routes: Routes =[
  {
    path: '',
    children: [
      {path: 'peliculas', component: PeliculasComponent},
      {path: 'descripcion', component: DescripcionComponent},
      {path: 'nave', component: NaveComponent},
      {path: 'personajes', component: PersonajesComponent},
      {path: '**', redirectTo: 'peliculas'}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class RegistroRoutingModule { }
