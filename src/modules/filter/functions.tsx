import {
  addAgeFrom,
  addAgeTo,
  addPriceFrom,
  addPriceTo,
  resetAllBrands,
  resetAllColors,
  resetAllCompositions,
  resetAllGenders,
  resetAllSeasons,
  resetAllSellers,
  resetAllSizes,
  selectAllBrands,
  selectAllColors,
  selectAllCompositions,
  selectAllGenders,
  selectAllSeasons,
  selectAllSellers,
  selectAllSizes,
  toggleBrand,
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

export const getNumericData = (text: string): string => {
  // If the text starts with '0' and the length is greater than 1, delete the '0'
  if (text.startsWith('0') && text.length > 1) {
    return text.substring(1);
  }

  // If the text is numeric or empty, return it as a string
  if (text === '' || /^\d+$/.test(text)) {
    return text;
  }

  return ''; // If the text is not numeric, return an empty string
};

// For translate
export const isNeedTranslation = (title) => {
  return title !== 'Size' && title !== 'Brand' && title !== 'Seller';
};
