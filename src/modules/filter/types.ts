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
  from: string;
  to: string;
}
