import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../redux/rootReducer';
import { Description } from './Description';

export const Product: React.FC = () => {
  const { product } = useSelector((state: IRootState) => state.products);

  return (
    <ScrollView>
      {/* <PriceContainer
        price={product.price}
        oldPrice={product.oldPrice}
        priceSize={sizes.title}
      />
      <TitleContainer title={product.title} seller={product.seller} />
      <Properties
        color={product.color}
        composition={product.composition}
        gender={product.gender}
      />
      <SizeContainer
        possibleSizes={product.possibleSizes}
        missingSizes={product.missingSizes}
      /> */}
      {product.description && <Description description={product.description} />}
    </ScrollView>
  );
};
