import { Transaction } from './transaction.interface';

describe('Transaction', () => {
  it('should create an instance', () => {
    expect(new Transaction()).toBeTruthy();
  });
});
