# Node JS
## Actualizar Node JS
Descargar Node JS de su sitio web
```
npm install npm@latest -g
```
# Angular
## Instalar Angular
Visitar: cli.angular.io
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
```
**let:** variable con ambito
**var:** variable _sin_ ambito
**const:** constante
```
## Tipo de datos
## Booleano
```
let isDone: boolean = false;
```
## Numerico
```
let decimal: number = 6;
let hex: number = 0xf00d;
```
## String
```
let color: string = "blue";
color = 'red';
```
## Multiline
```
let texto = `Hola, 
mi nombre es
este `;
```
## Array
Si no se les especifica tipo son **ANY**
```
let __list__: number[] = [1, 2, 3];
```
Para especificar tipo
```
let __list__: Array<number> = [1, 2, 3];
```
### Undefined
Utilizar solo **==**
```
console.log(undefined == undefined); // true
console.log(null == undefined); // true
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false
```
## Any
```
let notSure: any = 4;
notSure = "tal vez un string en vez de.."; // typeof = string
```
```
let list: any[] = [1, true, "free"];
list[1] = 100;
```
## For in
for(let i in list){
    console.log(list[i]); // 1, 2, 3
}
