import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manual de Angular 2 de DesarrolloWeb.com';
  visible = false;
  decirAdios() {
    this.visible = true;
  }
}
