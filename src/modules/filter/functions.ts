import {
  resetAllColors,
  resetAllGenders,
  selectAllColors,
  selectAllGenders,
  toggleColor,
  toggleGender,
} from '../../../redux/slices/filterSlice';

export const getItems = (title, colors, genders) => {
  let items;

  if (title === 'Colors') {
    items = {
      selectedItems: colors,
      onToggleItem: toggleColor,
      resetAll: resetAllColors,
      selectAll: selectAllColors,
    };
  }

  if (title === 'Gender') {
    items = {
      selectedItems: genders,
      onToggleItem: toggleGender,
      resetAll: resetAllGenders,
      selectAll: selectAllGenders,
    };
  }

  return items;
};
