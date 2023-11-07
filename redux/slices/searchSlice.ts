import { createSlice } from '@reduxjs/toolkit';
import { queries } from '../../mockData';

export interface ISearchState {
  queries: string[];
  text: string;
  isEnabled: boolean;
}

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    queries: queries,
    text: '',
    isEnabled: false,
  },
  reducers: {
    handleClearQuery(state, action) {
      state.queries = state.queries.filter(
        (query) => action.payload.id !== query.id
      );
    },
    handleClearAllQueries(state) {
      state.queries = [];
    },
    removeSearchText(state) {
      state.text = '';
    },
    handleSearchText(state, action) {
      state.text = action.payload;
    },
    turnOnSearch(state) {
      state.isEnabled = true;
    },
    turnOffSearch(state) {
      state.isEnabled = false;
    },
  },
});

export default searchSlice.reducer;
export const {
  handleClearQuery,
  handleClearAllQueries,
  handleSearchText,
  removeSearchText,
  turnOnSearch,
  turnOffSearch,
} = searchSlice.actions;
