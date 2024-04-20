import { v4 as uuidv4 } from 'uuid';
import {
  IColorGroup,
  IColorPaletteState,
  IVariant,
} from '../../../modules/product';
import { selectedColorGroupState } from '../../initialStates';

const groupVariantsByColor = (variants: IVariant[]) => {
  const colorMap = new Map();
  const allSizes = new Set<string>();

  variants.forEach((variant) => {
    if (variant.size) {
      allSizes.add(variant.size);
    }

    if (!colorMap.has(variant.color)) {
      colorMap.set(variant.color, {
        id: uuidv4(),
        color: variant.color,
        images: [...variant.images.map((img) => img.url)],
        freeSizes: new Set(variant.size ? [variant.size] : []),
      });
    } else {
      let existing = colorMap.get(variant.color);
      variant.images.forEach((img) => {
        if (!existing.images.includes(img.url)) {
          existing.images.push(img.url);
        }
      });

      if (variant.size) {
        existing.freeSizes.add(variant.size);
      }
    }
  });

  const allSizesArray = Array.from(allSizes);

  // Add dimensions to each colorMap
  const result = Array.from(colorMap.values()).map((colorInfo) => {
    const freeSizes = Array.from(colorInfo.freeSizes);
    const unavailableSizes = allSizesArray.filter(
      (size) => !freeSizes.includes(size)
    );

    return {
      ...colorInfo,
      freeSizes,
      unavailableSizes,
    };
  });

  console.log('Grouped colorMap with sizes', result);
  return result;
};

export const getValuesForColorPalette = (
  variants: IVariant[]
): IColorPaletteState => {
  const colorGroups: IColorGroup[] = groupVariantsByColor(variants) || [];

  if (!colorGroups.length) {
    return {
      colorGroups: [],
      selectedColor: '',
      selectedColorGroup: selectedColorGroupState,
    };
  }

  const selectedColor = colorGroups[0]?.color || '';
  let selectedSize;
  if (colorGroups[0]?.freeSizes) {
    selectedSize = colorGroups[0]?.freeSizes[0] || '';
  }

  const selectedColorGroup: IColorGroup =
    colorGroups.find((colorGroup) => colorGroup.color === selectedColor) ||
    selectedColorGroupState;

  return {
    selectedColor,
    selectedColorGroup,
    colorGroups,
    ...(selectedSize && {
      selectedSize,
    }),
  };
};
