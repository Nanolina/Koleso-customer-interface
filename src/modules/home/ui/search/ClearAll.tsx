import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { handleClearAllQueries } from '../../../../../redux/slices/searchSlice';
import { colors, css, sizes } from '../../../../consts';

export const ClearAll: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => dispatch(handleClearAllQueries())}
      style={styles.button}
    >
      <Text style={css.resetAllButton}>{t('clearAll')}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  text: {
    color: colors.gray,
    fontSize: sizes.text18,
  },
});
