import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  public personId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.personId = parseInt(params.get('id'), 10);
    });
  }

  goPrevious() {
    const previousId = this.personId > 1 ? this.personId - 1 : this.personId;
    this.router.navigate(['../', previousId], {relativeTo: this.route});
  }

  goNext() {
    const nextId = this.personId + 1;
    this.router.navigate(['../', nextId], {relativeTo: this.route});
  }

  gotoList() {
    const selectedId = this.personId ? this.personId : null;
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

}
