# Directivas Estructurales
Estas directivas, que se diferencian fácilmente al ser precedidas por un asterisco, alteran el layout añadiendo, eliminando o reemplazando elementos en el DOM.

# *ngif
Si la condición se cumple, su elemento se inserta en el DOM. Para el ejemplo __todo__ es el pivote, verifica la propiedad.
```html
<todo-detail *ngIf="selectedTodo"></todo-detail>
```
__Ejemplo *ngIf:__ El boton enviar no será visible hasta que se le ponga contenido a la entrada.
```html
<div class="container">
    <label>Nombre y Apellidos</label>
    <input type="text"
            class="form-control"
            placeholder="Complete su nombre y apellidos"
            [(ngModel)]="nombre">
    <button type="submit" class="btn btn-primary"
        *ngIf="nombre">
            Enviar
    </button>
</div>
```
__Ejemplo *ngIf and *ngElse:__ El boton enviar no será visible hasta que se le ponga contenido a la entrada, en caso contrario el boton aparecerá desabilitado.
```html
<div class="container">
    <label>Nombre y Apellidos</label>
    <input type="text"
            class="form-control"
            placeholder="Complete su nombre y apellidos"
            [(ngModel)]="nombre">
    <button type="submit" class="btn btn-primary"
        *ngIf="nombre; else desactivado">
            Enviar
    </button>
    <ng-template #desactivado>
        <button type="submit" class="btn btn-primary"
            disabled>

        </button>
    </ng-template>
</div>
```

# *ngFor
Repite su elemento en el DOM una vez por cada item que hay en el iterador que se le pasa.
```html
<div *ngFor="let todo of todos"></div>
```
```typescript
export class{
    public id: number;
    public nombre: string;
    public ciudad: string;

    constructor(id: number, nombre:string, apellidos:string){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.ciudad = ciudad;
    }
}
```

