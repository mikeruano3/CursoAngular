import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit {
  // @Input() element: {type: string, name: string, content: string};
  // tslint:disable-next-line: no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
