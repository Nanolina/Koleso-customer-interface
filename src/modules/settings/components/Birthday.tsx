import { DateTime } from 'luxon';
import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { resetValue, setValue } from '../../../../redux/slices/settingsSlice';
import { DatePicker } from '../../../components/DatePicker';
import { colors } from '../../../consts';
import { Button } from '../../../ui/Button';
import { maxBirthDate } from '../consts';
import { useTranslation } from 'react-i18next';

export const Birthday: React.FC = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const birthday = useSelector(
    (state: RootState) => state.settings.birthday as string
  );

  const validRange = useMemo(() => ({ endDate: maxBirthDate }), []);

  const handleReset = useCallback(() => {
    dispatch(resetValue({ key: 'birthday' }));
  }, [dispatch]);

  const handleChange = useCallback(
    (date: Date) => {
      const formattedDate = DateTime.fromJSDate(date).toISODate();
      dispatch(setValue({ key: 'birthday', value: formattedDate }));
    },
    [dispatch]
  );

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          text={t('reset')}
          onPress={handleReset}
          width="50%"
          backgroundColor={colors.white}
          textColor={colors.main}
          isBold={false}
          hasShadow
        />
      </View>
      <DatePicker
        value={birthday}
        onChange={handleChange}
        validRange={validRange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  button: {
    alignItems: 'flex-end',
  },
});
