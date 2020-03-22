import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {
  userName = "Miguel";
  constructor() { }

  ngOnInit(): void {
    this.userName = "Miguel";
  }

  deleteName(): void {
    this.userName = "";
  }
}
