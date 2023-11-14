import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../consts';
import { useTranslation } from 'react-i18next';

export const AddingAddressText: React.FC = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'address',
  });

  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={12} color={colors.black} />
      <Text>{t('addAddress')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
