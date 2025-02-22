export interface Transaction {
    id: number;
    user_id: number;
    amount: number;
    type: 'deposit' | 'withdrawal';
    created_at: string;
  }