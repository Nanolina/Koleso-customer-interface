import React, { useState } from 'react';
import { IVariant } from '../../types';
import { ThumbnailBar } from './ThubnailBar';

export const Variant: React.FC<{ variant: IVariant }> = ({ variant }) => {
  const [selectedImage, setSelectedImage] = useState(
    variant?.images.length > 0 ? variant?.images[0].url : null
  );

  return (
    <>
      <ThumbnailBar
        images={variant.images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      {/* <PriceContainer
        price={variant.finalPrice}
        oldPrice={variant.priceWithoutDiscount}
        priceSize={sizes.title}
      /> */}
      {/*<TitleContainer title={product.title} seller={product.seller} />
      <Properties
        color={product.color}
        composition={product.composition}
        gender={product.gender}
      />
      <SizeContainer
        possibleSizes={product.possibleSizes}
        missingSizes={product.missingSizes}
      /> */}
    </>
  );
};
