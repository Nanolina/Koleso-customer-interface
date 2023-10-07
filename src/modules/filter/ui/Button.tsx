import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { css } from "../../../consts";

export const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: css.size.text16,
    fontWeight: 'bold',
  },
});
