import {
  addAgeFrom,
  addAgeTo,
  addPriceFrom,
  addPriceTo,
  resetAllBrands,
  resetAllCategories,
  resetAllColors,
  resetAllGenders,
  resetAllSizes,
  selectAllBrands,
  selectAllCategories,
  selectAllColors,
  selectAllGenders,
  selectAllSizes,
  toggleBrand,
  toggleCategory,
  toggleColor,
  toggleGender,
  toggleSize,
} from '../../../redux/slices/filterSlice';

// For colors and genders
export const getItems = (title, colors, genders, sizes, categories, brands) => {
  let items;

  if (title === 'Color') {
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

  if (title === 'Size') {
    items = {
      selectedItems: sizes,
      onToggleItem: toggleSize,
      resetAll: resetAllSizes,
      selectAll: selectAllSizes,
    };
  }

  if (title === 'Category') {
    items = {
      selectedItems: categories,
      onToggleItem: toggleCategory,
      resetAll: resetAllCategories,
      selectAll: selectAllCategories,
    };
  }

  if (title === 'Brand') {
    items = {
      selectedItems: brands,
      onToggleItem: toggleBrand,
      resetAll: resetAllBrands,
      selectAll: selectAllBrands,
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

  if (title === 'Price') {
    functions = {
      addFrom: addPriceFrom,
      addTo: addPriceTo,
    };
  }

  return functions;
};
