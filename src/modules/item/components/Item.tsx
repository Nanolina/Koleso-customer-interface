import React from 'react';
import { ScrollView } from 'react-native';
import { PriceContainer } from '../../../components/PriceContainer';
import { css } from '../../../consts';
import { Description } from './Description';
import { Properties } from './Properties';
import SizeContainer from './SizeContainer';
import { TitleContainer } from './TitleContainer';

export const Item = ({ item }) => {
  return (
    <ScrollView>
      <PriceContainer
        price={item.price}
        oldPrice={item.oldPrice}
        priceSize={css.size.title}
      />
      <TitleContainer title={item.title} seller={item.seller} />
      <Properties
        color={item.color}
        composition={item.composition}
        gender={item.gender}
      />
      <SizeContainer
        possibleSizes={item.possibleSizes}
        missingSizes={item.missingSizes}
      />
      {item.description && <Description description={item.description} />}
    </ScrollView>
  );
};
