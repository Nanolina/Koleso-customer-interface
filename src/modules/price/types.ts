export interface IPriceContainerProps {
  price: number;
  oldPrice?: number;
  priceSize: number;
}

export interface IPriceInfoProps {
  text: string;
  price: number | string;
  hasCurrency?: boolean;
}

export interface IPriceInfoContainerProps {
  quantity: number;
  priceForProducts: number;
  hasDiscount?: boolean;
  discount?: number;
  courierServices?: number;
  totalPrice: number;
  isReturn?: boolean;
}
