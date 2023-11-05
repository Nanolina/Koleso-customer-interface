import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { css } from '../../../consts';

export const Sign = ({ type }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.sign}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: css.colors.mainOpacity,
    borderRadius: css.borderRadiusMin,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  sign: {
    fontWeight: 'bold',
    fontSize: css.size.text20,
    color: css.colors.white,
  },
});
