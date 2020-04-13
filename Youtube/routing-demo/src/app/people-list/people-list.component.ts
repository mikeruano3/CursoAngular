import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  public selectedId;
  people = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'Angular'},
    {id: 3, name: 'Angular'},
    {id: 4, name: 'Angular'},
    {id: 5, name: 'Angular'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'), 10);
    });
  }

  onSelect(person) {
    // this.router.navigate(['people/', person.id]);
    this.router.navigate([person.id], {relativeTo: this.route});
  }

  isSelected(person) {
    return person.id === this.selectedId;
  }

}
