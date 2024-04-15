export interface IInputProps {
  title: string;
}

export interface ICheckboxListProps {
  title: string;
  items: string[];
}

export interface IGetDataForInput {
  title: string;
  name: string;
  phone: string;
  email: string;
}

export interface IRowProps {
  title: string;
  displayTitle: string;
  navigateTo: string;
  items?: string[] | number[];
  selectedItems?: string[] | number[];
  selectedItem?: string | null;
}
