import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors, sizes } from '../../../consts';
import { Button } from '../../../ui/Button';
import { IButtonsProps } from '../types';

export const Buttons: React.FC<IButtonsProps> = React.memo(
  ({ items, selectedItems, resetAll, selectAll }) => {
    const dispatch = useDispatch();

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Selected items: {selectedItems.length}</Text>
        <View style={styles.buttonContainer}>
          {selectedItems.length === items.length ? (
            <Button
              text="Reset all"
              onPress={() => dispatch(resetAll())}
              backgroundColor={colors.white}
              textColor={colors.main}
              isBold={false}
              hasShadow
            />
          ) : (
            <Button
              text="Select all"
              onPress={() => dispatch(selectAll())}
              backgroundColor={colors.white}
              textColor={colors.main}
              isBold={false}
              hasShadow
            />
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  buttonContainer: {
    padding: 8,
  },
  text: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
  },
});
