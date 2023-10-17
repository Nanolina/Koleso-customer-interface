import React from 'react';
import { StyleSheet, View } from 'react-native';
import { reasonsForReturn } from '../../../consts';
import ReasonBox from '../ui/reason/ReasonBox';
import SelectedReasonBox from '../ui/reason/SelectedReasonBox';
import { useDispatch } from 'react-redux';
import { toggleReason } from '../../../../redux/slices/returnSlice';

const ReasonContainer = ({ selectedReason }) => {
  const dispatch = useDispatch();

  const renderReasonBox = (reason) => {
    if (selectedReason === reason) {
      return <SelectedReasonBox reason={selectedReason} />;
    }
    return (
      <ReasonBox
        reason={reason}
        onPress={() => dispatch(toggleReason(reason))}
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
  },
});

export default React.memo(ReasonContainer);
