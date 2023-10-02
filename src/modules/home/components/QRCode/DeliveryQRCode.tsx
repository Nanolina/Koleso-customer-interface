import { Platform, StyleSheet, View } from 'react-native';
import { css } from '../../../../consts';
import { Gradient } from '../../ui/QRCode/Gradient';
import { InfoQRCodeSection } from './InfoQRCodeSection';
import { QRCodeSection } from './QRCodeSection';

export const DeliveryQRCode = () => {
  return (
    <View style={styles.container}>
      <Gradient>
        <View style={styles.flexRow}>
          <InfoQRCodeSection />
          <QRCodeSection code="27300" />
        </View>
      </Gradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: css.borderRadius,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    marginHorizontal: Platform.OS === 'web' ? css.paddingWeb : css.padding,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
