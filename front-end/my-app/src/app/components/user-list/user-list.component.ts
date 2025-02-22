import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.interface';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'email', 'created_at', 'action'];
  users: User[] = [];
  dataSource: MatTableDataSource<User> = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService, private router: Router) {
    
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      let users = data;
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewTransactions(userId: number): void {
    this.router.navigate(['/transactions', userId]);
  }
}
