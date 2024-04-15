import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { colors, css } from '../../../../consts';
import { Button } from '../../../../ui/Button';

export const Buttons: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Button text={t('addToCart')} width="100%" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: css.padding,
    backgroundColor: colors.white,
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
});
