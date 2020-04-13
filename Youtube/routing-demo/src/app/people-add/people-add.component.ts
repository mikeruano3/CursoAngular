import { Component, OnInit } from '@angular/core';
import { Person } from '../people-service/person';
import { EnrollmentService } from '../people-service/enrollment.service';

@Component({
  selector: 'app-people-add',
  templateUrl: './people-add.component.html',
  styleUrls: ['./people-add.component.css'],
})
export class PeopleAddComponent implements OnInit {
  personModel = new Person(1, '', '', null);

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.enrollmentService.enroll(this.personModel)
        .subscribe(
              data => console.log('Success!', data),
              error => console.error('Error!', error)
              );
  }
}
