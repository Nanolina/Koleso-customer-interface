export interface IAddress {
  id: string;
  address: string;
}

export interface IAddressProps {
  address: IAddress;
  hasMarker?: boolean;
}
