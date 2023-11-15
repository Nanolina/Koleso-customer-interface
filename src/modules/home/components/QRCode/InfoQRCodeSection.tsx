import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../../../consts';

export const InfoQRCodeSection: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'QRCode' });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('delivery')}</Text>
      <Text style={styles.text}>{t('text')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'flex-start',
    gap: 5,
  },
  title: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
    color: colors.green,
    textAlign: 'left',
  },
  text: {
    fontSize: sizes.text12,
    textAlign: 'left',
  },
});
