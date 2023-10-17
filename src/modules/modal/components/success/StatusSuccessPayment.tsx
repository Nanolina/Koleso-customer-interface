import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../../consts';
import { Button } from '../../ui/Button';

export const StatusSuccessPayment = () => {
  return (
    <Button onPress={() => {}}>
      <View style={styles.container}>
        <Text style={styles.boldText}>
          Payment was <Text style={styles.green}>successful</Text>
        </Text>
        <Text style={styles.text}>
          Your order number: <Text style={styles.boldText}>32345678523456</Text>
        </Text>
      </View>

      {/* <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>
          You can track the status of your order
          <View style={styles.mainTextContainer}>
            <Gradient style={styles.gradient}>
              <Text style={styles.mainText}>here</Text>
            </Gradient>
          </View>
        </Text>
      </View> */}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  boldText: {
    fontSize: css.size.text16,
    fontWeight: 'bold',
  },
  green: {
    color: css.colors.green,
  },
  text: {
    fontSize: css.size.text16,
  },
  // mainTextContainer: {
  //   paddingTop: 10,
  // },
  // mainText: {
  //   fontSize: css.size.text30,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // gradient: {
  //   width: 100,
  //   height: 60,
  //   borderRadius: css.borderRadiusMax,
  // },
});
