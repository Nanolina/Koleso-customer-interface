import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createRequest, myRequests } from '../../../../consts';
import { toggleReturn } from '../../../../redux/slices/returnSlice';
import { css } from '../../../consts';
import { ButtonGradient } from '../../../ui/ButtonGradient';
import { ButtonWithBorder } from '../../../ui/ButtonWithBorder';

export const ButtonsRequest = () => {
  const { request } = useSelector((state: any) => state.return);
  const dispatch = useDispatch();

  return request === myRequests ? (
    <View style={styles.container}>
      <ButtonGradient
        text={myRequests}
        onPress={() => dispatch(toggleReturn(myRequests))}
        style={styles.button}
      />
      <ButtonWithBorder
        text={createRequest}
        onPress={() => dispatch(toggleReturn(createRequest))}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ButtonWithBorder
        text={myRequests}
        onPress={() => dispatch(toggleReturn(myRequests))}
      />
      <ButtonGradient
        text={createRequest}
        onPress={() => dispatch(toggleReturn(createRequest))}
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
