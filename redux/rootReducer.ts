import { combineReducers } from 'redux';
import catalogSlice from './slices/catalogSlice';
import searchSlice from './slices/searchSlice';

const rootReducer = combineReducers({
  catalog: catalogSlice,
  search: searchSlice,
});

export default rootReducer;
