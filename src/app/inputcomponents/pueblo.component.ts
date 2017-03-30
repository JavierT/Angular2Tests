// Utilizamos los componentes EventEmitter y Output
import { Component, EventEmitter, Input, Output } from '@angular/core';
 
@Component({
  selector: 'pueblo',
  template: `
    <hr/>
    <h3>{{nombre}}</h3>
    <p>Ciudad: {{ciudad}}</p>
    <p>Pais: {{nacionReal}}</p>
    <button (click)="lanzar($event)">Lanzar alert</button>
  `
})
 
export class PuebloComponent {
  @Input() ciudad: string;
  @Input('pais') nacionReal: string;
  
  // Usamos el decorador Output
  @Output() PasameElPueblo = new EventEmitter();
 
  public nombre:string;
 
  constructor(){
    this.nombre = "Pueblo de la Toscana";
     
  }
 
  // Cuando se lance el evento click en la plantilla llamaremos a este método
  lanzar(event){
                // Usamos el método emit
        this.PasameElPueblo.emit({nombre: this.nombre});
  }
 
 
}
