import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { css } from '../../../consts';
import { clearAllFilters } from '../../../redux/slices/filterSlice';

export const ResetAll = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(clearAllFilters())}>
        <Text style={css.resetAllButton}>{t('resetAll')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
});
