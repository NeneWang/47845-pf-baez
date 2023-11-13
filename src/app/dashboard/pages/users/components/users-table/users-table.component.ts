import { Component, Input } from '@angular/core';
import { User } from '../../models';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [],
})
export class UsersTableComponent {
  
  // editUser Emit
  // @Input() editUser: (user: User) => void = () => {};

  @Input() users: User[] = [];
  dataSource: User[] = [];

  

  displayedColumns = ['id', 'fullname', 'email', 'actions'];

  // goToDetail
  goToDetail(id: number): void {
    console.log('ID: ', id);
  }

}
