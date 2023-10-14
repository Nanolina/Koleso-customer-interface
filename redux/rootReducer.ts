import { combineReducers } from 'redux';
import cartSlice from './slices/cartSlice';
import catalogSlice from './slices/catalogSlice';
import checkoutSlice from './slices/checkoutSlice';
import filterSlice from './slices/filterSlice';
import paymentSlice from './slices/paymentSlice';
import searchSlice from './slices/searchSlice';
import settingsSlice from './slices/settingsSlice';

const rootReducer = combineReducers({
  catalog: catalogSlice,
  search: searchSlice,
  filter: filterSlice,
  cart: cartSlice,
  checkout: checkoutSlice,
  payment: paymentSlice,
  settings: settingsSlice,
});

export default rootReducer;
