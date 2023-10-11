import { minDaysDelivery } from '../../consts';

const currentDate = new Date();
export const minDate = new Date(
  currentDate.setDate(currentDate.getDate() + minDaysDelivery)
);
