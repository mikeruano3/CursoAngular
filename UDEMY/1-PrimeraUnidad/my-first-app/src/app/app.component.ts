import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h1 {
      color: dodgerBlue;
    }
  `]
})
export class AppComponent {
  title = 'First APP';
  name = 'Miguel';
}
