import { combineReducers } from 'redux';
import authSlice, { IAuthState } from './slices/authSlice';
import cartSlice, { ICartState } from './slices/cartSlice';
import catalogSlice, { ICatalogState } from './slices/catalogSlice';
import checkoutSlice, { ICheckoutState } from './slices/checkoutSlice';
import filterSlice, { IFilterState } from './slices/filterSlice';
import footerSlice, { IFooterState } from './slices/footerSlice';
import paymentSlice, { IPaymentState } from './slices/paymentSlice';
import returnSlice, { IReturnState } from './slices/returnSlice';
import searchSlice, { ISearchState } from './slices/searchSlice';
import settingsSlice, { ISettingsState } from './slices/settingsSlice';

export interface RootState {
  auth: IAuthState;
  cart: ICartState;
  catalog: ICatalogState;
  checkout: ICheckoutState;
  filter: IFilterState;
  footer: IFooterState;
  payment: IPaymentState;
  return: IReturnState;
  search: ISearchState;
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
