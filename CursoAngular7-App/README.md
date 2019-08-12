# Generalidades de Angular
* Iniciar
```
ng serve
```
* Armar proyecto para distribucion
```
ng build
```
# Componentes
El componente principal se selecciona con *<app-root>* y esta declarado en _app.component.ts_ y _app.component.html_
* Generar Componente
```
ng g c principal
```
# Ciclo de Vida de un Componente
### ngOnChanges
* Este metodo se va a ejecutar cuando se produce algun cambio de valores de las propiedades de nuestro componente y también es el primero en ejecutarse.
* Para usarlo hay que importar las clases __OnChanges__ y __SimpleChanges__:
```typescript
import { Component, OnChanges, SimpleChanges } from "@angular/core";
```
* Después implementar la interfaz __OnChanges__ en la clase del componente:
```typescript
export class NuevoComponente implements OnChanges {}
```
* Y por último definir el método __ngOnChanges__ que se ejecutará al cargar el componente o hacer cambios en las propiedades
```typescript
ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
}
```
* El parámetro Changes de tipo SimpleChanges es un Objeto que incluye los cambios realizados en las propiedades

### ngOnInit
* Es el primer método que se ejecuta después de lanzar el constructor de la clase del componente.
* Para usarlo debemos importar primero __OnInit__:
```typescript
import { Component, OnChanges, SimpleChanges, OnInit } from "@angular/core";
```
* Luego debemos declarar la implementacion en mi componente:
```typescript
export class NuevoComponente implements OnChanges, OnInit {}
```
* Finalmente solo debemos implementar el evento en mi componente
```typescript
ngOnInit(): void {
    throw new Error("Method not implemented.");
}
```


## Version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
