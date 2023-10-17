import { ItemFromCreateRequest } from './ItemFromCreateRequest';

export const ReturnByCourier = ({ item }) => {
  return <ItemFromCreateRequest item={item} quantity={true} />;
};
