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
    <View>
      <ItemFromCreateRequest item={item} quantity={true} />
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Reason</Text>
          <ReasonContainer selectedReason={reason} />
        </View>

        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Photos</Text>
            <Text style={styles.extra}>Up to 5</Text>
          </View>
          <PhotoUpload />
        </View>

        <View style={styles.container}>
          <View style={styles.textContainer}>
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

        <Hr />

        <BottomInfo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    gap: 30,
  },
  container: {
    gap: 5,
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
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
