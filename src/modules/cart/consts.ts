import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
export const heightImage = Platform.OS === 'web' ? height / 2 : height / 5;
export const widthImage = width / 4;
export const gapBetweenDetails =
  Platform.OS === 'web' ? heightImage / 3 : heightImage / 5;
export const gapBetweenIcons = gapBetweenDetails + 5;
