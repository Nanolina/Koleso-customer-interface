import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFieldReturn } from '../../../../redux/slices/returnSlice';
import { css } from '../../../consts';
import { Hr } from '../../../ui/Hr';
import { Note } from '../../../ui/Note';
import { BottomInfo } from './BottomInfo';
import { ItemFromCreateRequest } from './ItemFromCreateRequest';
import { PhotoUpload } from './PhotoUpload';
import ReasonContainer from './ReasonContainer';

export const ReturnByCourier = ({ item }) => {
  const { reason, comment } = useSelector((state: any) => state.return);
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <ItemFromCreateRequest item={item} quantity={true} />

      <Text style={styles.text}>Reason</Text>
      <ReasonContainer selectedReason={reason} />

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

      <Hr />

      <BottomInfo />
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
