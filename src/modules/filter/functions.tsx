import {
  addAgeFrom,
  addAgeTo,
  addPriceFrom,
  addPriceTo,
  resetAllBrands,
  resetAllCategories,
  resetAllColors,
  resetAllCompositions,
  resetAllGenders,
  resetAllSeasons,
  resetAllSellers,
  resetAllSizes,
  selectAllBrands,
  selectAllCategories,
  selectAllColors,
  selectAllCompositions,
  selectAllGenders,
  selectAllSeasons,
  selectAllSellers,
  selectAllSizes,
  toggleBrand,
  toggleCategory,
  toggleColor,
  toggleComposition,
  toggleGender,
  toggleSeason,
  toggleSeller,
  toggleSize,
} from '../../../redux/slices/filterSlice';

// For colors and genders
export const getItems = (
  title,
  colors,
  genders,
  sizes,
  categories,
  brands,
  sellers,
  compositions,
  seasons
) => {
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

  if (title === 'Seller') {
    items = {
      selectedItems: sellers,
      onToggleItem: toggleSeller,
      resetAll: resetAllSellers,
      selectAll: selectAllSellers,
    };
  }

  if (title === 'Composition') {
    items = {
      selectedItems: compositions,
      onToggleItem: toggleComposition,
      resetAll: resetAllCompositions,
      selectAll: selectAllCompositions,
    };
  }

  if (title === 'Season') {
    items = {
      selectedItems: seasons,
      onToggleItem: toggleSeason,
      resetAll: resetAllSeasons,
      selectAll: selectAllSeasons,
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

export const getNumericData = (text) => {
  // If the text starts with '0' and the length is greater than 1 (e.g., '01', '023', etc.), delete the first '0'
  if (text.startsWith('0') && text.length > 1) {
    text = text.substring(1);
  }
  // Make sure the text is either empty or consists only of numbers
  if (text.trim() === '' || /^\d+$/.test(text)) {
    return text;
  }
};
