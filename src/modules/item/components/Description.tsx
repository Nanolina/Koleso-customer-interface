import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, sizes } from '../../../consts';

export const Description = ({ description }) => {
  return (
    <TouchableOpacity>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
        {description}
      </Text>
      <Text style={styles.more}>more</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.text15,
  },
  more: {
    color: colors.main,
  },
});
