import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { queries } from '../../../../../mockData';
import { ClearAll } from './ClearAll';
import { SearchQuery } from './SearchQuery';

export const SearchQueries = () => {
  const [searchQueries, setSearchQueries] = useState(queries);

  const handleClearAll = () => {
    setSearchQueries([]);
  };

  const handleClearQuery = (searchQuery) => {
    setSearchQueries(
      searchQueries.filter((query) => searchQuery.id !== query.id)
    );
  };

  return (
    <>
      <ClearAll handleClearAll={handleClearAll} />
      <ScrollView>
        {searchQueries.map((query: any) => (
          <SearchQuery
            query={query}
            handleClearQuery={handleClearQuery}
            key={query.id}
          />
        ))}
      </ScrollView>
    </>
  );
};
