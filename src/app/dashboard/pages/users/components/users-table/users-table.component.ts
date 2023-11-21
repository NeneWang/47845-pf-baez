import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserRole } from '../../models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

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

  userRole$: Observable<UserRole | undefined>;

  constructor(private router: Router, private store: Store) {
    this.userRole$ = this.store
      .select(selectAuthUser)
      .pipe(map((u) => u?.role));
  }

  goToDetail(id: number): void {
    this.router.navigate(['/dashboard/users', id]);
    
  }

}
