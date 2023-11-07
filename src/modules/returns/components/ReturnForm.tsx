import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFieldReturn } from '../../../../redux/slices/returnSlice';
import { css } from '../../../consts';
import { Note } from '../../../ui/Note';
import { PhotoUpload } from './PhotoUpload';
import ReasonContainer from './ReasonContainer';

export const ReturnForm = ({ item }) => {
  const { reason, comment } = useSelector((state: any) => state.return);
  const dispatch = useDispatch();

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
        onChangeText={(text) =>
          dispatch(addFieldReturn({ field: 'comment', value: text }))
        }
      />
    </View>
  );
};

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
    fontSize: css.size.text20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  extra: {
    color: css.colors.gray,
    fontSize: css.size.text16,
  },
});
