
// Funciones
function pruebaCursoAngular(parametro1: string, parametro2: string, parametro3: string){
    console.log("cadena 1 - " + parametro1);
    console.log("cadena 2 - " + parametro2);
    console.log("cadena 3 - " + parametro3);
}

function prueba2(parametro1: string = "holamundo"){
    console.log("cadena 1 - " + parametro1);
}

pruebaCursoAngular("Miguel", "es", "feliz");
prueba2("nel");

// Funciones Normales
var sumarNumeros = function (parametro1: number, parametro2: number){
    return parametro1 + parametro2;
}
let resultado = sumarNumeros(2, 3);
console.log(resultado);

// Funciones anonimas
var sumarNumerosFlecha = (parametro1: number, parametro2: number) => {
    return parametro1 + parametro2;
};

let resultado1 = sumarNumerosFlecha(3, 3);
console.log(resultado1);

// Promise
/*let mipromesa = new Promise( function( resolve:any, reject:any ) {
    resolve();
});
mipromesa.then( function(){
        console.log("La promesa ha finalizado con éxito");
    }, function(){
        console.log("La promesa ha finalizado con error");
    });
*/

// Clases
export class Persona{
    nombre: string = "";
    apellido: string = "";
    edad: number = 0;
    kilometros: number = 0;

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
objetoPersona.setKM(123);
objetoPersona.caminar();

