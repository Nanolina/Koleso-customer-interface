import { StyleSheet, View } from 'react-native';
import { css } from '../../../../consts';
import { InfoQRCodeSection } from './InfoQRCodeSection';
import { QRCodeSection } from './QRCodeSection';

export const DeliveryQRCode: React.FC = () => {
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
    paddingTop: 10,
    paddingBottom: 20,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: css.borderRadiusMax,
    ...css.shadow,
  },
});
