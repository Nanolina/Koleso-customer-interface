import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../consts';

export const AddingAddressText: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={12} color={colors.black} />
      <Text>{t('address.addAddress')}</Text>
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
