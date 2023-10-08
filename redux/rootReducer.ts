import { combineReducers } from 'redux';
import catalogSlice from './slices/catalogSlice';
import searchSlice from './slices/searchSlice';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';

const rootReducer = combineReducers({
  catalog: catalogSlice,
  search: searchSlice,
  filter: filterSlice,
  cart: cartSlice,
});

export default rootReducer;
