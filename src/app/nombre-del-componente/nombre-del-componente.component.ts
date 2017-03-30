import { Component, OnInit } from '@angular/core';
// Importamos la clase del servicio
import {PaisesService} from '../dbrequests/readData.service';
 

@Component({
  selector: 'app-nombre-del-componente',
  templateUrl: './nombre-del-componente.component.html',
  styleUrls: ['./nombre-del-componente.component.css'],
  providers:[PaisesService]
})
export class NombreDelComponenteComponent implements OnInit {

   dato = "Creando componentes para DesarrolloWeb.com";

   arrayClases = ['positivo', 'si'];

   preguntasObj = [
    {
      pregunta: "¿España ganará la Euro 2016?",
      si: 22,
      no: 95
    },
    {
      pregunta: "¿Estás aprendiendo Angular 2 en DesarrolloWeb??",
      si: 262,
      no: 3
    },
    {
      pregunta: "¿Has hecho ya algún curso en EscuelaIT??",
      si: 1026,
      no: 1
    }
  ]
  public pelicula;
  public pelicula_conseguida;

  public posts;
  public errorMessage;

 // cargamos el servicio
    constructor(private _paisesService: PaisesService){
        
  
                // Llamamos al método del servicio
                this._paisesService.getPosts()
                                    .subscribe(
                                        result => {
                                                this.posts = result;
 
                                                console.log(this.posts);
                                        },
                                        error => {
                                            this.errorMessage = <any>error;
                                             
                                            if(this.errorMessage !== null){
                                                console.log(this.errorMessage);
                                                alert("Error en la petición");
                                            }
                                        }
                                    );
    }
  ngOnInit() {
    console.log('componente inicializado...');
  }

}
