import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../redux/rootReducer';
import { Property } from '../../../../ui/Property';
import { IVariant } from '../../types';

export const Variant: React.FC<{ variant: IVariant }> = ({ variant }) => {

  return (
    <>
      {/* <PriceContainer
        price={variant.finalPrice}
        oldPrice={variant.priceWithoutDiscount}
        priceSize={sizes.title}
      /> */}
      {/*<TitleContainer title={product.title} seller={product.seller} />*/}
      {/* <Properties
        color={variant.color}
        composition={product.composition}
        gender={product.gender}
      /> */}
      {/*<SizeContainer
        possibleSizes={product.possibleSizes}
        missingSizes={product.missingSizes}
      />*/}
    </>
  );
};
