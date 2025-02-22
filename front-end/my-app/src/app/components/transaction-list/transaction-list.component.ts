import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Transaction } from '../../models/transaction.interface';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transaction-list',
  imports: [CommonModule, RouterLink, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  userId: number = 0;
  displayedColumns: string[] = ['id','amount', 'type', 'created_at'];
  dataSource: MatTableDataSource<Transaction> = new MatTableDataSource(this.transactions);

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['userId']; 
      this.loadTransactions();
    });
  }

  loadTransactions(): void {
    this.transactionService
      .getTransactionsByUser(this.userId)
      .subscribe((data) => {
        this.transactions = data;
        this.dataSource = new MatTableDataSource(this.transactions);
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
  
    
}