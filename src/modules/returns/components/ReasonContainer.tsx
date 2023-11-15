import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { colors, css, reasonsForReturn, sizes } from '../../../consts';
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
            textStyle={styles.text}
            onPress={() => handlePress(reason)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
    alignItems: 'center',
  },
  selectedBox: {
    width: '90%',
    ...css.shadow,
    backgroundColor: colors.gray,
  },
  unselectedBox: {
    width: '90%',
    ...css.shadow,
    backgroundColor: colors.white,
  },
  text: {
    color: colors.main,
    fontSize: sizes.text16,
  },
});
