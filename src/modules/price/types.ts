export interface IPriceContainerProps {
  finalPrice: number;
  priceWithoutDiscount?: number;
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
  hasTotalPrice?: boolean;
  totalPrice?: number;
  hasDelivery?: boolean;
  courierServices?: number;
  isReturn?: boolean;
}

export interface IPriceProps {
  price: number;
  style: any;
}
