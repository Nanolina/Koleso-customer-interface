import { Dimensions } from 'react-native';

export const colors = {
  white: '#fff',
  black: '#000000',
  main: '#6c00ad',
  mainOpacity: '#6C00B06C',
  yellow: '#FDDC00',
  orange: '#ff7c00',
  green: '#00B377',
  red: '#ff0000',
  darkRed: '#C80303',

  // Shades of gray
  gray: '#c6c5d7',
  lightGray: '#E0E0E9',
  darkGray: '#ADACB7',
  grayOpacity: 'rgba(223, 218, 218, 0.55)',
};

export const sizes = {
  title: 24,
  text12: 12,
  text15: 15,
  text16: 16,
  text18: 18,
  text20: 20,
  iconSizeMax: 30,
  iconSizeMiddle: 25,
  iconSizeMin: 20,
  iconSize16: 16,
};

export const css = {
  borderRadiusMax: 12,
  borderRadiusMin: 8,
  padding: 10,
  paddingMax: 30,
  paddingBottom: 20,
  paddingTop: 10,
  resetAllButton: {
    fontSize: sizes.text16,
    color: colors.gray,
  },
  shadow: {
    backgroundColor: colors.white,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4, // for Android
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  productCard: {
    iconSize: 18,
    borderRadius: 5,
  },
  item: {
    sizeBox: {
      width: 45,
    },
  },
  filter: {
    checkbox: {
      width: 30,
      height: 30,
      borderRadius: 8,
    },
  },
  priceInfoContainer: {
    gap: 10,
    paddingVertical: 10,
  },
  cards: {
    container: {
      flex: 1,
      gap: 20,
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 12,
    },
    text: {
      fontSize: 16,
    },
  },
  auth: {
    gap: 50,
    inputContainer: {
      gap: 30,
      padding: 5,
    },
  },
  return: {
    photoContainer: {
      width: 70,
      height: 100,
      borderWidth: 1,
      borderColor: colors.lightGray,
      borderRadius: 8,
    },
  },
  form: {
    container: {
      gap: 20,
      paddingBottom: 20,
    },
  },
  shadowContainer: {
    gap: 10,
    padding: 5,
  },
};

export const currency = '€';

// delivery, return
const minDaysDelivery = 3;
const currentDate = new Date();
export const minDate = new Date(
  currentDate.setDate(currentDate.getDate() + minDaysDelivery)
);

export const reasonsForReturn = ["Didn't fit", 'Bad quality', 'Warranty case'];
export const addressPickUpPoint = {
  id: 'f0ff3d68-ebcd-43c1-a470-37ce063089a4',
  address: 'Limassol, Mesa Geitonia',
};
export const courierServices = 5;

const { height } = Dimensions.get('window');
export const headerHeight = height * 0.06;
