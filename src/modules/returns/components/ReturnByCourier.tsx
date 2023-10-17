import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { css } from '../../../consts';
import { ImageUpload } from './ImageUpload';
import { ItemFromCreateRequest } from './ItemFromCreateRequest';
import ReasonContainer from './ReasonContainer';

export const ReturnByCourier = ({ item }) => {
  const { reason } = useSelector((state: any) => state.return);

  return (
    <View>
      <ItemFromCreateRequest item={item} quantity={true} />
      <View style={styles.container}>
        <Text style={styles.text}>Reason</Text>
        <ReasonContainer selectedReason={reason} />
        <ImageUpload />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  text: {
    fontSize: css.size.text18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
