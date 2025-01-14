
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';

import { MatLabel } from '@angular/material/form-field';
import { User, UserRole } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  userName = '';

  users: User[] = [
    {
      id: 1,
      name: 'Naruto',
      lastName: 'Uzumaki',
      email: 'naruto@mail.com',
      role: 'STUDENT',
      token: '123456',
      password: '123456',
    },
    {
      id: 2,
      name: 'Sasuke',
      lastName: 'Uchiha',
      email: 'sasuke@mail.com',
      role: 'ADMIN',
      token: '123456',
      password: '123456',
    },
  ];

  constructor(private matDialog: MatDialog) {}

  openUsersDialog(): void {
    this.matDialog
      .open(UsersDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          console.log('VALOR: ', v);
          if (!!v) {
            this.userName = v;
        }
        },
      });
  }


  onDeleteUser(id: number): void {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
  }

  onEditUser(user: User): void {
    const index = this.users.findIndex((u) => u.id === user.id);
    this.users[index] = user;
  }

}
