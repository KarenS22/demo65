import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.scss'
})
export class DadoComponent implements OnInit {
  valor: number = 0;
  @Input() color: string = '';
  path = '';
  ngOnInit(): void {
    this.lanzar();
  }

  lanzar() {
    this.valor = Math.trunc(Math.random() * 6) + 1;
    this.path = `assets/${this.valor}.png`;
  }
}
