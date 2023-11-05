import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createRequest, myRequests } from '../../../../consts';
import { toggleReturns } from '../../../../redux/slices/returnSlice';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';

export const ButtonsRequest = () => {
  const { returns } = useSelector((state: any) => state.return);
  const dispatch = useDispatch();

  return returns === myRequests ? (
    <View style={styles.container}>
      <Button
        text={myRequests}
        onPress={() => dispatch(toggleReturns(myRequests))}
        style={styles.button}
      />
      <Button
        text={createRequest}
        onPress={() => dispatch(toggleReturns(createRequest))}
        border={true}
        backgroundColor={css.colors.white}
        textColor={css.colors.black}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Button
        text={myRequests}
        onPress={() => dispatch(toggleReturns(myRequests))}
        border={true}
        backgroundColor={css.colors.white}
        textColor={css.colors.black}
      />
      <Button
        text={createRequest}
        onPress={() => dispatch(toggleReturns(createRequest))}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: css.size.buttonWidth,
  },
});
