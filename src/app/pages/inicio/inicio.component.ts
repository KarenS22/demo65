import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { DadoComponent } from '../../components/dado/dado.component';
import { CronometroComponent } from '../../components/cronometro/cronometro.component';
import { ArticulosComponent } from '../../components/articulos/articulos.component';
import { GestionPerrosService } from '../../services/gestion-perros.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, DadoComponent, CronometroComponent, ArticulosComponent, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent  implements OnInit {
  title = 'demo65';
  name = 'Karen';
  edad = 10;
  salario = 1000;
  contador = 0;
  sueldos = [1700, 500, 950, 450];

  a = 0;
  b = 0;
  c = 0;

  articulos = [
    { codigo: 1, descripcion: 'TV', precio: 540 },
    { codigo: 2, descripcion: 'Microondas', precio: 140 },
    { codigo: 3, descripcion: 'Licuadora', precio: 40 },
  ]

  codigo = 0;
  descripcion = '';
  precio = 0;

  esMayorDeEdad() {
    if (this.edad >= 18) {
      return 'Es mayor de edad';
    }
    else {
      return 'Es menor de edad';
    }
  }

  incrementar() {
    this.contador = this.contador + 1;
  }

  sumar() {
    this.c = this.a + this.b;
  }

  guardar() {
    // this.articulos.push({codigo: this.articulos.length+1, descripcion: this.descripcion, precio: this.precio});
    this.articulos.push({ codigo: this.codigo, descripcion: this.descripcion, precio: this.precio });

    console.log(this.articulos.length)
  }
  borrar(codigo: number) {
    this.articulos.splice(0, codigo);
  }
  seleccionar(codigo: number, descripcion: string, precio: number) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
  }

  @ViewChild('dado1') dado1!: DadoComponent;
  @ViewChild('dado2') dado2!: DadoComponent;
  @ViewChild('dado3') dado3!: DadoComponent;

  lanzar() {
    this.dado1.lanzar();
    this.dado2.lanzar();
    this.dado3.lanzar();

    if (
      this.dado1.valor === this.dado2.valor ||
      this.dado1.valor === this.dado3.valor ||
      this.dado2.valor === this.dado3.valor
    ) {
      setTimeout(() => {
        alert('Ganaste');
      }, 500);
    }
  }


  minuto = 0;
  actualizar(estado: boolean) {
    if (estado == true) {
      this.minuto++;
    }
  }

  perros: any

  constructor(private perrosService: GestionPerrosService) { 

  }

  ngOnInit() :void {
    this.perrosService.addPerros('Firulais', 'Pastor Aleman');
    this.perrosService.addPerros('Rex', 'Doberman');
    this.perros = this.perrosService.getPerros();
  }
}
