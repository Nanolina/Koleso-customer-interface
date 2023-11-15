import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { colors, reasonsForReturn } from '../../../consts';
import { Box } from '../../../ui/Box';

export const ReasonContainer: React.FC = () => {
  const { t } = useTranslation();

  const [selectedReason, setSelectedReason] = useState(null);

  const handlePress = useCallback((reason) => {
    setSelectedReason(reason);
  }, []);

  return (
    <View style={styles.container}>
      {reasonsForReturn.map((reason) => {
        const isSelected = selectedReason === reason;

        return (
          <Box
            key={reason}
            label={t(`returns.${reason}`)}
            boxStyle={isSelected ? styles.selectedBox : styles.unselectedBox}
            textStyle={isSelected ? styles.selectedText : styles.unselectedText}
            onPress={() => handlePress(reason)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  selectedBox: {
    backgroundColor: colors.main,
  },
  unselectedBox: {
    backgroundColor: colors.white,
    borderColor: colors.main,
    borderWidth: 1,
  },
  selectedText: {
    color: colors.white,
  },
  unselectedText: {
    color: colors.main,
  },
});
