import {Component} from '@angular/core';
import {PuebloComponent} from './pueblo.component';
 
 
@Component({
    selector: 'mi-formulario',
    template: `<h1>Mi formulario22222</h1>
 
<pueblo [ciudad]="ciudad"
        [pais]="pais"
        (PasameElPueblo)="showPueblo($event)"></pueblo>
`
})
 
export class MiFormularioComponent {
    public ciudad:string = "Milano";
    public pais:string = "Italia";
 
    showPueblo(event):void{
        alert(event.nombre);
    }
 
}