"use strict";
exports.__esModule = true;
// Funciones
function pruebaCursoAngular(parametro1, parametro2, parametro3) {
    console.log("cadena 1 - " + parametro1);
    console.log("cadena 2 - " + parametro2);
    console.log("cadena 3 - " + parametro3);
}
function prueba2(parametro1) {
    if (parametro1 === void 0) { parametro1 = "holamundo"; }
    console.log("cadena 1 - " + parametro1);
}
pruebaCursoAngular("Miguel", "es", "feliz");
prueba2("nel");
// Funciones Normales
var sumarNumeros = function (parametro1, parametro2) {
    return parametro1 + parametro2;
};
var resultado = sumarNumeros(2, 3);
console.log(resultado);
// Funciones anonimas
var sumarNumerosFlecha = function (parametro1, parametro2) {
    return parametro1 + parametro2;
};
var resultado1 = sumarNumerosFlecha(3, 3);
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
var Persona = /** @class */ (function () {
    function Persona() {
        this.nombre = "";
        this.apellido = "";
        this.edad = 0;
        this.kilometros = 0;
    }
    Persona.prototype.caminar = function () {
        console.log("caminando..." + this.kilometros);
    };
    Persona.prototype.setKM = function (kilometros) {
        this.kilometros = kilometros;
    };
    return Persona;
}());
exports.Persona = Persona;
var objetoPersona = new Persona();
objetoPersona.setKM(123);
objetoPersona.caminar();
