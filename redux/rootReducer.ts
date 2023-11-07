import { combineReducers } from 'redux';
import authSlice from './slices/authSlice';
import cartSlice, { ICartState } from './slices/cartSlice';
import catalogSlice, { ICatalogState } from './slices/catalogSlice';
import checkoutSlice, { ICheckoutState } from './slices/checkoutSlice';
import filterSlice, { IFilterState } from './slices/filterSlice';
import footerSlice from './slices/footerSlice';
import paymentSlice, { IPaymentState } from './slices/paymentSlice';
import returnSlice from './slices/returnSlice';
import searchSlice, { ISearchState } from './slices/searchSlice';
import settingsSlice, { ISettingsState } from './slices/settingsSlice';

export interface RootState {
  catalog: ICatalogState;
  search: ISearchState;
  filter: IFilterState;
  cart: ICartState;
  
  checkout: ICheckoutState;
  payment: IPaymentState;
  settings: ISettingsState;
}

const rootReducer = combineReducers({
  catalog: catalogSlice,
  search: searchSlice,
  filter: filterSlice,
  cart: cartSlice,
  checkout: checkoutSlice,
  payment: paymentSlice,
  settings: settingsSlice,
  auth: authSlice,
  return: returnSlice,
  footer: footerSlice,
});

export default rootReducer;
