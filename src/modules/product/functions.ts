import { IColorGroup } from './types';

/**
 * Function for combining and sorting sizes from all color groups.
 * @param {IColorGroup[]} colorGroups An array of color groups.
 * @returns {string[]} A sorted array of unique dimensions.
 */
export const compileAllSizes = (colorGroups: IColorGroup[]): string[] => {
  const sizeSet = new Set<string>();

  colorGroups.forEach((group) => {
    group.freeSizes?.forEach((size) => sizeSet.add(size));
    group.unavailableSizes?.forEach((size) => sizeSet.add(size));
  });

  const sortedSizes = Array.from(sizeSet).sort((a, b) => {
    // Check if both values are numbers
    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);

    // Sort strings if both values are not numbers
    if (isNaN(numA) && isNaN(numB)) {
      return a.localeCompare(b);
    }

    // Sort numbers if both values are numbers
    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    // If one of the values is a string and the other is a number, the string comes first
    return isNaN(numA) ? -1 : 1;
  });

  return sortedSizes;
};
