import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addAgeFrom, addAgeTo } from '../../../../redux/slices/filterSlice';
import { css } from '../../../consts';

export const RowRange = ({ title }) => {
  const dispatch = useDispatch();
  const { ageFrom, ageTo } = useSelector((state: any) => state.filter);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.right}>
        <View style={styles.inputWrapper}>
          <Text style={styles.textFromTo}>From</Text>
          <TextInput
            style={styles.input}
            value={ageFrom}
            onChangeText={(input) => dispatch(addAgeFrom(input))}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.textFromTo}>To</Text>
          <TextInput
            style={styles.input}
            value={ageTo}
            onChangeText={(input) => dispatch(addAgeTo(input))}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: css.size.text20,
    fontWeight: 'bold',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: css.colors.border,
    borderRadius: css.borderRadius,
    padding: 5,
    width: 50,
    height: 30,
    fontSize: css.size.text16,
  },
  textFromTo: {
    fontSize: css.size.text16,
    color: css.colors.gray,
  },
});
