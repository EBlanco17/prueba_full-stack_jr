import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-transaction-form',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css'
})
export class TransactionFormComponent {
  transaction: Transaction = { id: 0, user_id: 0, amount: 0, type: 'deposit', created_at: '' };
  userId: number = 0;

  constructor(
    private transactionService: TransactionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['userId']; 
      this.transaction.user_id = this.userId;
    });
  }

  createTransaction(): void {
    this.transactionService.createTransaction(this.transaction).subscribe(() => {
      alert('Transacción registrada');
      this.router.navigate([`/transactions/${this.userId}`]);
    }, (error) => {
      alert('Ocurrió un error al crear la transacción. ' + error.error.error);
  }
  );}

}
