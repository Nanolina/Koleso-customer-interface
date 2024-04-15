import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../redux/rootReducer';
import { IVariant } from '../../types';
import { Variant } from '../variant/Variant';
import { Description } from './Description';

export const Product: React.FC = () => {
  const { product } = useSelector((state: IRootState) => state.products);

  return (
    <>
      {product.variants?.map((variant: IVariant) => (
        <Variant variant={variant} />
      ))}
      {product.description && <Description description={product.description} />}
    </>
  );
};
