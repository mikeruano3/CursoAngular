import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  categorias: any = [ { codigo: 1, texto: 'Politica'}, { codigo: 2, texto:  'Educacion' }, { codigo: 3, texto: 'Seguridad'}];
  noticias: any = [
          { categoria: {
              codigo : 1,
              texto : 'Politica'
            },
            titulo : 'Los vecinos fueron los primeros en enterarse',
            texto: 'Prueba de texto',
            imagen: 3
          },
          { categoria: {
            codigo : 1,
            texto : 'Politica'
          },
          titulo : 'Vecinos fueron los primeros en enterarse',
          texto: 'Prueba de texto',
          imagen: 3
        }
  ];
  constructor() { }

  ngOnInit() {
  }

}
