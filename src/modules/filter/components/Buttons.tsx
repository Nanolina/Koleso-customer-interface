import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';

export const Buttons = ({ items, selectedItems, resetAll, selectAll }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selected items: {selectedItems.length}</Text>
      {selectedItems.length === items.length ? (
        <ButtonGradient text="Reset all" onPress={() => dispatch(resetAll())} />
      ) : (
        <ButtonGradient
          text="Select all"
          onPress={() => dispatch(selectAll())}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  text: {
    fontSize: css.size.text16,
    fontWeight: 'bold',
  },
});
