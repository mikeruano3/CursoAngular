import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  /* @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>(); */

  constructor(private logginService: LoggingService,
              private accountsService: AccountsService) {}

  onSetTo(status: string) {
    /* this.statusChanged.emit({id: this.id, newStatus: status}); */
    this.accountsService.updateStatus(this.id, status);
    this.logginService.logStatusChange(status);
  }
}
