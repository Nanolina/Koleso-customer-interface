import { Platform, StatusBar } from 'react-native';

export const css = {
  colors: {
    pink: '#FF08C1',
    lightPink: '#FEEFFF',
    purple: '#8C60FF',
    white: '#fff',
    gray: '#808080',
    lightGray: '#c9c7c7',
    main: '#6C00B0',
    yellow: '#FDDC00',
    black: '#000000',
    orange: '#FF7700',
    green: '#00B377',
    red: '#ff0000',
    darkRed: '#C80303',
    new: '#00B377',

    // with opacity
    mainOpacity: '#6C00B06C',
    pinkOpacity: '#FF08C18C',
    grayOpacity: 'rgba(223, 218, 218, 0.55)',
    purpleOpacity: '#8C60FF8C',
  },
  size: {
    title: 24,
    text12: 12,
    text15: 15,
    text16: 16,
    text18: 18,
    text20: 20,
    text30: 30,
    buttonWidth: 150,
  },
  iconSizeMax: 30,
  iconSizeMiddle: 25,
  iconSizeMin: 20,
  borderRadiusMax: 12,
  borderRadiusMin: 8,
  padding: 10,
  paddingMax: 30,
  paddingBottom: 20,
  productCard: {
    iconSize: 18,
    borderRadius: 5,
  },
  header: {
    container: {
      paddingHorizontal: 15,
      paddingBottom: 5,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      backgroundColor: '#6C00B0',
    },
    title: {
      fontSize: 24,
      color: '#fff',
    },
  },
  item: {
    size: {
      box: {
        borderRadius: 8,
        width: 45,
        height: 40,
      },
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
      paddingHorizontal: Platform.OS === 'web' ? 100 : 10,
    },
    image: {
      width: Platform.OS === 'web' ? 100 : 50,
      height: Platform.OS === 'web' ? 100 : 50,

      borderRadius: 12,
    },
    text: {
      fontSize: Platform.OS === 'web' ? 20 : 16,
    },
  },
  auth: {
    gap: 50,
    inputContainer: {
      gap: 30,
    },
  },
  return: {
    container: {
      backgroundColor: '#FEEFFF',
      borderRadius: 12,
      gap: 10,
      padding: 10,
      marginBottom: 10,
    },
    centerContainer: {
      gap: 10,
    },
    reason: {
      box: {
        borderRadius: 8,
        width: Platform.OS === 'web' ? 200 : 95,
        height: 60,
        padding: 5,
      },
    },
    photoContainer: {
      width: 70,
      height: 100,
      borderWidth: 1,
      borderColor: '#c9c7c7',
      borderRadius: 8,
    },
    photo: {
      width: 70,
      height: 100,
      borderRadius: 8,
    },
  },
  form: {
    container: {
      gap: 20,
      paddingBottom: 20,
    },
  },
};

export const currency = '€';

// delivery, return
const minDaysDelivery = 3;
const currentDate = new Date();
export const minDate = new Date(
  currentDate.setDate(currentDate.getDate() + minDaysDelivery)
);
export const timeFramesDelivery = [
  { label: 'From 9.00 to 12.00', value: '9.00-12.00' },
  { label: 'From 12.00 to 15.00', value: '12.00-15.00' },
  { label: 'From 15.00 to 18.00', value: '15.00-18.00' },
  { label: 'From 18.00 to 21.00', value: '18.00-21.00' },
];

export const imagesSocialMedia = {
  telegram: require('./assets/telegram.png'),
  instagram: require('./assets/instagram.png'),
  whatsApp: require('./assets/whatsApp.png'),
};

export const reasonsForReturn = ["Didn't fit", 'Bad quality', 'Warranty case'];
