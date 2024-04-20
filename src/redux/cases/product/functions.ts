import { v4 as uuidv4 } from 'uuid';
import {
  IColorsWithImagesState,
  IImagesWith1Color,
  IVariant,
} from '../../../modules/product';
import { selectedImagesWith1ColorState } from '../../initialStates';

export const groupImagesByColor = (variants: IVariant[]) => {
  const colorMap = new Map();

  variants.forEach((variant) => {
    if (!colorMap.has(variant.color)) {
      colorMap.set(variant.color, {
        id: uuidv4(),
        color: variant.color,
        images: [...variant.images.map((img) => img.url)],
      });
    } else {
      let existing = colorMap.get(variant.color);
      variant.images.forEach((img) => {
        if (!existing.images.includes(img.url)) {
          existing.images.push(img.url);
        }
      });
    }
  });

  return Array.from(colorMap.values());
};

export const getValuesForColorsWithImages = (
  variants: IVariant[]
): IColorsWithImagesState => {
  const colorsWithImagesItems: IImagesWith1Color[] =
    groupImagesByColor(variants) || [];

  if (!colorsWithImagesItems.length) {
    return {
      selectedColor: '',
      selectedImagesWith1Color: selectedImagesWith1ColorState,
      items: [],
    };
  }

  const selectedColor = colorsWithImagesItems[0]?.color || '';
  const selectedImagesWith1Color: IImagesWith1Color =
    colorsWithImagesItems.find(
      (imagesWith1Color) => imagesWith1Color.color === selectedColor
    ) || selectedImagesWith1ColorState;

  return {
    selectedColor,
    selectedImagesWith1Color,
    items: colorsWithImagesItems,
  };
};
