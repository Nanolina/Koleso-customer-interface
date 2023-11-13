export interface IFinanceProps {
  id: string;
  type: string;
  orderNumber: string;
  paymentAmount: number;
  date: string;
  time: string;
  status: 'successful' | 'rejected';
}
