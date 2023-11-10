import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFieldReturn } from '../../../../redux/slices/returnSlice';
import { colors, sizes } from '../../../consts';
import { IItemProps } from '../../../types';
import { Note } from '../../../ui/Note';
import { PhotoUpload } from './PhotoUpload';
import { ReasonContainer } from './ReasonContainer';

export const ReturnForm: React.FC<{ item: IItemProps }> = React.memo(
  ({ item }) => {
    const { comment } = useSelector((state: any) => state.return);
    const dispatch = useDispatch();

    const handleChangeText = React.useCallback(
      (text: string) => {
        dispatch(addFieldReturn({ field: 'comment', value: text }));
      },
      [dispatch]
    );

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>Reason</Text>
        <ReasonContainer />

        <View style={styles.container}>
          <Text style={styles.text}>Photos</Text>
          <Text style={styles.extra}>Up to 5</Text>
        </View>
        <PhotoUpload />

        <View style={styles.container}>
          <Text style={styles.text}>Comment</Text>
        </View>
        <Note
          placeholder="Describe the reason for returning the product..."
          value={comment}
          onChangeText={handleChangeText}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  mainContainer: {
    gap: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: sizes.text20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  extra: {
    color: colors.gray,
    fontSize: sizes.text16,
  },
});
