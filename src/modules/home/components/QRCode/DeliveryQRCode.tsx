import { Platform, StyleSheet, View } from 'react-native';
import { css } from '../../../../consts';
import { InfoQRCodeSection } from './InfoQRCodeSection';
import { QRCodeSection } from './QRCodeSection';

export const DeliveryQRCode = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <InfoQRCodeSection />
        <QRCodeSection code="27300" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: css.borderRadiusMax,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    marginHorizontal: Platform.OS === 'web' ? css.paddingMax : css.padding,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
