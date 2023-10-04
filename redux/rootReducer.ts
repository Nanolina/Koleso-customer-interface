import { combineReducers } from 'redux';
import catalogSlice from './slices/catalogSlice';

const rootReducer = combineReducers({
  catalog: catalogSlice,
});

export default rootReducer;
