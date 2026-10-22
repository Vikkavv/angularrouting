import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit{

  public numero!: number;
  public doble!: number;


  constructor(private _activeRoute: ActivatedRoute, private _router: Router, private _detector: ChangeDetectorRef){
    this.doble = 0;
    this.numero = 0;
  }

  goHome(): void{
    this._router.navigate(["/"]);
  }

  goToNumeroDobleParams(numero: number): void{
    this._router.navigate(["/numerodoble", numero]);
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      if(parametros['numero']){
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
        this._detector.detectChanges();
      } 
    })
  }

}
