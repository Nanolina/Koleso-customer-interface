import {
  addAgeFrom,
  addAgeTo,
  resetAllColors,
  resetAllGenders,
  selectAllColors,
  selectAllGenders,
  toggleColor,
  toggleGender,
} from '../../../redux/slices/filterSlice';

// For colors and genders
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

// For ages
export const getFromToFunctions = (title) => {
  let functions;

  if (title === 'Age') {
    functions = {
      addFrom: addAgeFrom,
      addTo: addAgeTo,
    };
  }

  return functions;
};
