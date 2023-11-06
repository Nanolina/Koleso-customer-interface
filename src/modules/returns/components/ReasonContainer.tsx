import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { css, reasonsForReturn } from '../../../consts';
import Box from '../../../ui/Box';

const ReasonContainer = () => {
  const [selectedReason, setSelectedReason] = useState(null);

  const handlePress = (reason) => {
    setSelectedReason(reason);
  };

  const renderReasonBox = (reason) => {
    if (selectedReason === reason) {
      return (
        <Box
          label={reason}
          boxStyle={{ backgroundColor: css.colors.main }}
          textStyle={{ color: css.colors.white }}
          onPress={() => handlePress(reason)}
        />
      );
    }

    return (
      <Box
        label={reason}
        boxStyle={{
          backgroundColor: css.colors.white,
          borderColor: css.colors.main,
          borderWidth: 1,
        }}
        textStyle={{ color: css.colors.main }}
        onPress={() => handlePress(reason)}
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
    justifyContent: 'space-around',
  },
});

export default React.memo(ReasonContainer);
