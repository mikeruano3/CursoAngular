import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CursoAngular7-LifeCycleHooks';
  titulo: any = "este es el titulo dentro de ts";
  datos: any = { Nombre: "Miguel", Apellido: "Ruano", Edad: 24, Documento: "273123"};

  eventoBoton(){
    console.log("Ejecutamos el evento para el boton");
  }
}
