import { Component, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.scss'
})
export class ArticulosComponent implements OnInit {

  articulos = [
    { codigo: 1, descripcion: 'TV', precio: 540 },
    { codigo: 2, descripcion: 'Microondas', precio: 140 },
    { codigo: 3, descripcion: 'Licuadora', precio: 40 },
  ]
  codigo = 0;
  descripcion = '';
  precio = 0;


  ngOnInit(): void {
    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;

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

}
