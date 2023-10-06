import { combineReducers } from 'redux';
import catalogSlice from './slices/catalogSlice';
import searchSlice from './slices/searchSlice';
import filterSlice from './slices/filterSlice';

const rootReducer = combineReducers({
  catalog: catalogSlice,
  search: searchSlice,
  filter: filterSlice,
});

export default rootReducer;
