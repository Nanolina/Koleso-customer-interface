import { CheckboxItem } from '../../../ui/CheckboxItem';
import { Buttons } from './Buttons';
import { CartItems } from './CartItems';

export const Cart = () => {
  return (
    <>
      <Buttons />
      <CheckboxItem item="Select all" onPress={() => {}} />
      <CartItems />
    </>
  );
};
