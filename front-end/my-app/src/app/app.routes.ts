import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'users', component: UserFormComponent },
  { path: 'form-transaction/:userId', component: TransactionFormComponent },
  { path: 'transactions/:userId', component: TransactionListComponent },
  { path: 'transactions/:userId/new', component: TransactionFormComponent },

];
