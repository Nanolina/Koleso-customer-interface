import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../redux/rootReducer';
import { IVariant } from '../../types';
import { Variant } from '../variant/Variant';

export const Product: React.FC = () => {
  const { variants } = useSelector(
    (state: IRootState) => state.products.product
  );

  return (
    <>
      {variants.map((variant: IVariant) => (
        <Variant variant={variant} />
      ))}
      {/* {product.description && <Description description={product.description} />} */}
    </>
  );
};
