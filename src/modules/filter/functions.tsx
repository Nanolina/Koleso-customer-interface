import { Text } from 'react-native';
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
  resetAllSellers,
  resetAllSizes,
  selectAllBrands,
  selectAllCategories,
  selectAllColors,
  selectAllCompositions,
  selectAllGenders,
  selectAllSellers,
  selectAllSizes,
  toggleBrand,
  toggleCategory,
  toggleColor,
  toggleComposition,
  toggleGender,
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
  compositions
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

// For wheather
const getWheatherConditionsSmiles = (condition) => {
  if (condition === 'Wind') {
    return '🌬';
  } else if (condition === 'Sun') {
    return '☀️';
  } else if (condition === 'Snow') {
    return '❄';
  } else if (condition === 'Rain') {
    return '🌧';
  } else {
    return '';
  }
};

export const getExtraText = (
  fromArg,
  toArg,
  signFirst,
  signSecond,
  wheatherCondition
) => {
  const from = signFirst ? `${signFirst}${fromArg}` : fromArg;
  const to = signSecond ? `${signSecond}${toArg}` : toArg;

  if (fromArg !== '0' && toArg === '0') {
    return (
      <Text>
        From {from}&nbsp;
        {getWheatherConditionsSmiles(wheatherCondition)}
      </Text>
    );
  } else if (fromArg === '0' && toArg !== '0') {
    return (
      <Text>
        To {to}&nbsp;
        {getWheatherConditionsSmiles(wheatherCondition)}
      </Text>
    );
  } else if (fromArg !== '0' && toArg !== '0') {
    return (
      <Text>
        From {from} to {to}&nbsp;
        {getWheatherConditionsSmiles(wheatherCondition)}
      </Text>
    );
  } else if (wheatherCondition) {
    return <Text>&nbsp;{getWheatherConditionsSmiles(wheatherCondition)}</Text>;
  } else {
    return `Add wheather`;
  }
};
