import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { NaveComponent } from './pages/nave/nave.component';
import { DescripcionComponent } from './pages/descripcion/descripcion.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { RegistroRoutingModule } from './registro-routing.module'
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    PeliculasComponent,
    NaveComponent,
    DescripcionComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule
  ]
})
export class ListadosModule { }
