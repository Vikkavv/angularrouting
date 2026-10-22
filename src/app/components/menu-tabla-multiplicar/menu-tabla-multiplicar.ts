import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tabla-multiplicar',
  standalone: false,
  styleUrl: './menu-tabla-multiplicar.css',
  templateUrl: './menu-tabla-multiplicar.html',
})
export class MenuTablaMultiplicar {

  public numeros!: Array<number>;

  constructor(){
    let numerosLocal: Array<number> = [];
    for (let i = 1; i <= 5; i++) {
        let random = Math.random() * 100;
        numerosLocal.push(parseInt(random+""));
    }

    this.numeros = numerosLocal;
  }

}
