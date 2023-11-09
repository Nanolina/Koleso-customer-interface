import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { queries } from '../../mockData';

export interface ISearchState {
  queries: string[];
  text: string;
}

export interface ISearchQueryProps {
  query: string;
}

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    queries: queries,
    text: '',
    isEnabled: false,
  } as ISearchState,
  reducers: {
    handleClearQuery(state, action: PayloadAction<string>) {
      state.queries = state.queries.filter((query) => action.payload !== query);
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
  },
});

export default searchSlice.reducer;
export const {
  handleClearQuery,
  handleClearAllQueries,
  handleSearchText,
  removeSearchText,
} = searchSlice.actions;
