import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, css, reasonsForReturn } from '../../../consts';
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
          boxStyle={{ backgroundColor: colors.main }}
          textStyle={{ color: colors.white }}
          onPress={() => handlePress(reason)}
        />
      );
    }

    return (
      <Box
        label={reason}
        boxStyle={{
          backgroundColor: colors.white,
          borderColor: colors.main,
          borderWidth: 1,
        }}
        textStyle={{ color: colors.main }}
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
