export interface IFinanceProps {
  id: string;
  text: string;
  orderNumber: string;
  paymentAmount: number;
  date: string;
  time: string;
  status: 'successful' | 'rejected';
}
