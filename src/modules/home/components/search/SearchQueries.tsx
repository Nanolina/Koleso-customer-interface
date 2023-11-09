import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { ClearAll } from '../../ui/search/ClearAll';
import { SearchQuery } from './SearchQuery';

export const SearchQueries = () => {
  const queries = useSelector((state: any) => state.search.queries);

  return (
    <>
      <ClearAll />
      <ScrollView>
        {queries.map((query: any) => (
          <SearchQuery query={query} key={query} />
        ))}
      </ScrollView>
    </>
  );
};
