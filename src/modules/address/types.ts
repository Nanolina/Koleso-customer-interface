export interface IFormProps {
  name: string;
  city: string;
  street: string;
  house: string;
  apartment: string;
  addField: Function;
}

export interface IAddress {
  id: string;
  address: string;
}

export interface IAddressProps {
  address: IAddress;
  hasMarker?: boolean;
}
