import { DateTime } from 'luxon';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetValue, setValue } from '../../../../redux/slices/settingsSlice';
import { DatePicker } from '../../../components/DatePicker';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { maxBirthDate } from '../consts';

export const Birthday = () => {
  const dispatch = useDispatch();
  const { birthday } = useSelector((state: any) => state.settings);

  const validRange = React.useMemo(() => {
    return {
      endDate: maxBirthDate,
    };
  }, [maxBirthDate]);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <ButtonGradient
          text="Reset"
          onPress={() => dispatch(resetValue({ key: 'birthday' }))}
        />
      </View>
      <DatePicker
        value={birthday}
        onChange={(date) => {
          const formattedDate = DateTime.fromJSDate(date).toISODate();

          dispatch(
            setValue({
              key: 'birthday',
              value: formattedDate,
            })
          );
        }}
        validRange={validRange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: css.padding,
    paddingVertical: css.padding,
    gap: 20,
  },
  button: {
    alignItems: 'flex-end',
  },
});
