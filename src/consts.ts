import { Platform, StatusBar } from 'react-native';

export const css = {
  colors: {
    pink: '#FF08C1',
    lightPink: '#FEEFFF',
    purple: '#8C60FF',
    white: '#fff',
    gray: '#808080',
    lightGray: '#c9c7c7',
    main: '#D404FF',
    yellow: '#FDDC00',
    black: '#000000',
    green: '#038B09',
    lightGreen: 'rgba(7, 214, 15, 0.55)',
    red: '#ff0000',
    darkRed: '#C80303',

    // with opacity
    mainOpacity: 'rgba(212, 4, 255, 0.5)',
    pinkOpacity: '#FF08C18C',
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
      gradientBox: {
        borderRadius: 6,
        width: 40,
        height: 35,
      },
    },
  },
  filter: {
    checkbox: {
      width: 30,
      height: 30,
      borderRadius: 10,
    },
    wheather: {
      box: {
        borderRadius: 8,
        width: 70,
        height: 55,
      },
      gradientBox: {
        borderRadius: 6,
        width: 65,
        height: 50,
      },
    },
  },
  box: {
    borderRadius: 12,
    width: 150,
    height: 40,
  },
  gradientBox: {
    borderRadius: 10,
    width: 145,
    height: 35,
  },
  priceInfoContainer: {
    gap: 10,
    paddingVertical: 10,
  },
  modal: {
    paddingHorizontal: 30,
    statusPayment: {
      container: {
        backgroundColor: '#FEEFFF',
        borderRadius: 12,
        gap: 20,
        padding: 20,
      },
    },
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
      gradientBox: {
        borderRadius: 6,
        width: Platform.OS === 'web' ? 195 : 90,
        height: 55,
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
};

export const currency = '€';
export const minDaysDelivery = 3;
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
