import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { ClearAll } from '../../ui/search/ClearAll';
import { SearchQuery } from './SearchQuery';

export const SearchQueries: React.FC = React.memo(() => {
  const queries = useSelector((state: RootState) => state.search.queries);

  return (
    <>
      <ClearAll />
      <ScrollView>
        {queries.map((query: string) => (
          <SearchQuery query={query} key={query} />
        ))}
      </ScrollView>
    </>
  );
});
