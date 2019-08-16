# Data Binding

## 1. Interpolación: (Hacia el DOM)
#### AKA Poner un título dentro de la página
Angular se encarga de insertar el valor de esa propiedad del componente entre las etiquetas `<div>` donde lo hemos definido. Se deben usar las dobles llaves y el nombre de variable definida en _ts_ `{{ variable }}`
```typescript
<h1> Contenido del titulo {{ titulo }}</h1>
```
```typescript
export class AppComponent {
  titulo: any = "este es el titulo dentro de ts";
}
```

## 2. Property binding: (Hacia el DOM)
#### AKA Pasar de un padre a un hijo
* Generar hijo
```typescript
ng g c hijo
```
* Declarar variable datos en el padre
```typescript
export class AppComponent {
  datos: any = { Nombre: "Miguel", Apellido: "Ruano", Edad: 24, Documento: "273123"};
}
```
* Declarar la llamada desde html del padre (debería mostrar _hijo works!_)
```html
<app-hijo></app-hijo>
```
Ahora modificar...
* Declarar la variable en el padre como _propiedadhijo_ y usar la variable declarada en TS como _datos_
```html
<app-hijo [propiedadhijo]="datos"></app-hijo>
```
* Recibir esa variable dentro el TypeScript del hijo, con el decorador `input`
```typescript
  @Input("propiedadhijo") datohijo: any;
```
No olvidarse de importar `input`
```typescript
import {Input} from "@angular/core";
```
* Usar la variable dentro del html del hijo
```typescript
<h1> hijo works! {{datoshijo | json}} </h1>
```

## 3. Databinding doble y de eventos (Desde/Hacia el DOM)
### AKA Recibir y pasar datos desde elementos del DOOM
* Ejemplo:
```html
<input [(ngModel)]="todo.subject">
```
* Clase padre `app.component.ts`
```typescript
<input type="text" [(ngModel)]="datos.Nombre" class="form-control">
```
* Clase `app.module.ts`
```typescript
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
```
Mas abajo
```typescript
@NgModule({
  imports: [
    FormsModule
   ],
})
```
### Evento Boton
* Archivo `html` padre
```typescript
<button type="button" 
    (click)="eventoBoton()"
```
* Archivo `TS` padre
```typescript
export class AppComponent {

  eventoBoton(){
    console.log("Ejecutamos el evento para el boton");
  }
}
```