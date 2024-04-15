export interface IButtonsProps {
  items: string[];
  selectedItems: string[];
  resetAll: () => { type: string };
  selectAll: () => { type: string };
}

export interface ICheckboxListProps {
  title: string;
  items: string[];
}

export interface IRangeProps {
  text: string;
  value: string;
  onChangeText: (value: string) => { type: string; payload: number };
}

export interface IRowRangeProps {
  title: string;
  displayTitle: string;
  from: number;
  to: number;
}

export interface IRowProps {
  title: string;
  displayTitle: string;
  navigateTo: string;
  items?: string[] | number[];
  selectedItems?: string[] | number[];
  selectedItem?: string | null;
}
