import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createRequest, myRequests } from '../../../../consts';
import { toggleReturns } from '../../../../redux/slices/returnSlice';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { ButtonWithBorder } from '../../../ui/ButtonWithBorder';

export const ButtonsRequest = () => {
  const { returns } = useSelector((state: any) => state.return);
  const dispatch = useDispatch();

  return returns === myRequests ? (
    <View style={styles.container}>
      <ButtonGradient
        text={myRequests}
        onPress={() => dispatch(toggleReturns(myRequests))}
        style={styles.button}
      />
      <ButtonWithBorder
        text={createRequest}
        onPress={() => dispatch(toggleReturns(createRequest))}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ButtonWithBorder
        text={myRequests}
        onPress={() => dispatch(toggleReturns(myRequests))}
      />
      <ButtonGradient
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
