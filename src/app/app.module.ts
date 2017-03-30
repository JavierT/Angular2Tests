import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NombreDelComponenteComponent } from './nombre-del-componente/nombre-del-componente.component';
import {PuebloComponent} from './inputcomponents/pueblo.component';
import {MiFormularioComponent} from './inputcomponents/mi-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    NombreDelComponenteComponent,
    PuebloComponent,
    MiFormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
