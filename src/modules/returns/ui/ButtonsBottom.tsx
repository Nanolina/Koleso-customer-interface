import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { courier, pickupPoint } from '../../../../consts';
import { toggleReturnWay } from '../../../../redux/slices/returnSlice';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';

export const ButtonsBottom = ({ item }) => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        text={pickupPoint}
        onPress={() => {
          dispatch(toggleReturnWay(pickupPoint));
          navigation.navigate('ReturnWayPage', {
            item,
          });
        }}
        border={true}
        backgroundColor={css.colors.white}
        textColor={css.colors.black}
      />
      <Button
        text={courier}
        onPress={() => {
          dispatch(toggleReturnWay(courier));
          navigation.navigate('ReturnWayPage', {
            item,
          });
        }}
        border={true}
        backgroundColor={css.colors.white}
        textColor={css.colors.black}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
