# Node JS
## Actualizar Node JS
Descargar Node JS de su sitio web [Node JS](https://nodejs.org/)
```
npm install npm@latest -g
```
# Angular
## Instalar Angular
Visitar: _cli.angular.io_ [Angular](https://cli.angular.io)
```
npm install -g @angular-cl
ng -v
```
## Crear app Angular
```
ng new my-dream-app
cd my-dream-app
ng serve
```

# TypeScript 
## Instalar Typescript
```
npm install -g typescript
```
## Compilar Typescript
```
tsc apps.ts
tsc -w *.ts
```
## Hacer archivo init de configuracion
```
tsc -init
```
# Sintaxis TS
## Variables
__let:__ variable con ambito
__var:__ variable _sin_ ambito
__const:__ variable constante

## Tipo de datos
### Booleano
```typescript
let isDone: boolean = false;
```
### Numerico
```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
```
### String
```typescript
let color: string = "blue";
color = 'red';
```
### Multiline
```typescript
let texto = `Hola, 
mi nombre es
este `;
```
### Array
Si no se les especifica tipo son **ANY**:
```typescript
let list: number[] = [1, 2, 3];
```
Para especificar tipo:
```typescript
let list: Array<number> = [1, 2, 3];
```
### Undefined
Utilizar solo **==**
```typescript
console.log(undefined == undefined); // true
console.log(null == undefined); // true
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false
```
### Any
```typescript
let notSure: any = 4;
notSure = "tal vez un string en vez de.."; // typeof = string
```
```typescript
let list: any[] = [1, true, "free"];
list[1] = 100;
```
### For in
```typescript
for(let i in list){
    console.log(list[i]); // 1, 2, 3
}
```
### Funciones de flecha
```
(param1, param2, ... rest) => {expresion; }
```
```typescript
var add = (x, y) => x + y;
```
Con varias instrucciones
```javascript
var foo = ( param1, param2 ) => {
    var result;

    // Do amazing things here

    return result;
};
```
### Funciones
```typescript
var sumarNumeros = function (parametro1: number, parametro2: number){
    return parametro1 + parametro2;
}
let resultado = sumarNumeros(2, 3);
```
Función flecha
```typescript
var sumarNumeros = (parametro1: number, parametro2: number) => {
    return parametro1 + parametro2;
};
```
### Promesas
Operaciones asíncronas
* __Pendiente__ En su estado inicial, no se ha cumplido ni rechazado
* __Cumplida__ La promesa se ha resuelto satisfactoriamente
* __Rechazada__ La promesa se ha completado con un error
* __Arreglada__ La promesa ya no está pendiente. O bien se ha cumplido o bien se ha rechazado.
```typescript
new Promise(function(resolve, reject) {...})
```
* __Resolve__ Funcion que se llamara si se ha resuelto satisfactoriamente
* __Reject__ Funcion llamada en caso de error
#### Otra forma de resolver promesas
* __Promise.prototype.catch(onReject)__: Añade un _callback_ que se ejecutará si la promise es rechazada, y devuelve la _promise_ actualizada
* __Promise.prototype.then(onFulfilled, onReject)__: Añade un _callback_ para caso de exito, y otro caso de error y devuelve la _promise_ actualizada
```typescript
let mipromesa = new Promise( function( resolve:any, reject:any ) {
    resolve();
});
mipromesa.then( function(){
        console.log("La promesa ha finalizado con éxito");
    }, function(){
        console.log("La promesa ha finalizado con error");
    });
```

### Clases
```typescript
export class Persona{
    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;

    caminar(){
        console.log("caminando..." + this.kilometros);
    }
    setKM(kilometros: number){
        this.kilometros = kilometros;
    }
    constructor(){

    }
}
let objetoPersona = new Persona();
objetoPesona.setKM(123);
objetoPersona.caminar();
```