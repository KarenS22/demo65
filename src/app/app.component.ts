import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
//habilita el ngif 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DadoComponent } from './components/dado/dado.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { OnInit } from '@angular/core';
import { GestionPerrosService } from './services/gestion-perros.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent ,CronometroComponent, ArticulosComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'demo65';
  name = 'Karen';
  edad = 10;
  salario = 1000;
  contador = 0;
  sueldos = [1700, 500, 950, 450];

 
}

