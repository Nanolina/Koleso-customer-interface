import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleReason } from '../../../../redux/slices/returnSlice';
import { css, reasonsForReturn } from '../../../consts';
import { Button } from '../../../ui/Button';

const ReasonContainer = ({ selectedReason }) => {
  const dispatch = useDispatch();

  const renderReasonBox = (reason) => {
    if (selectedReason === reason) {
      return <Button text={selectedReason} />;
    }

    return (
      <Button
        text={reason}
        onPress={() => dispatch(toggleReason(reason))}
        border={true}
        backgroundColor={css.colors.white}
        textColor={css.colors.black}
      />
    );
  };

  return (
    <View style={styles.container}>
      {reasonsForReturn?.map((reason) => (
        <View key={reason}>{renderReasonBox(reason)}</View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    width: '100%',
    flexWrap: 'wrap'
  },
  selectedReason: {
    backgroundColor: css.colors.main,
    padding: 10,
  },
  text: {
    color: css.colors.white,
    fontWeight: 'bold',
  },
});

export default React.memo(ReasonContainer);
