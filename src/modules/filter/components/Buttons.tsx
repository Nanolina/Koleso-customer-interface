import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors, sizes } from '../../../consts';
import { Button } from '../../../ui/Button';

export const Buttons = ({ items, selectedItems, resetAll, selectAll }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selected items: {selectedItems.length}</Text>
      {selectedItems.length === items.length ? (
        <Button
          text="Reset all"
          onPress={() => dispatch(resetAll())}
          width="50%"
          backgroundColor={colors.white}
          textColor={colors.main}
          border={true}
          isBold={false}
        />
      ) : (
        <Button
          text="Select all"
          onPress={() => dispatch(selectAll())}
          width="50%"
          backgroundColor={colors.white}
          textColor={colors.main}
          border={true}
          isBold={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  text: {
    fontSize: sizes.text16,
    fontWeight: 'bold',
  },
});
