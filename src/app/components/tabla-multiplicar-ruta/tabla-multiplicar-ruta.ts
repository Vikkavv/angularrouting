import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-ruta',
  standalone: false,
  styleUrl: './tabla-multiplicar-ruta.css',
  templateUrl: './tabla-multiplicar-ruta.html',
})

export class TablaMultiplicarRuta implements OnInit{

  public numero!: number;
  public resultados!: Array<Resultado>;

  constructor(private _activeRoute: ActivatedRoute, private _detector: ChangeDetectorRef){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.numero = parseInt(params['numero']);
      this.createTable();
      this._detector.detectChanges();
    })
  }

  createTable(){
    let resultadosLocal = [];
    for (let i = 1; i <= 10; i++) {
        resultadosLocal.push({operacion: this.numero + " * " + i, resultado: this.numero * i});
    }
    this.resultados = resultadosLocal;
  }
}

class Resultado {
  public operacion!: string;
  public resultado!: number;
}
