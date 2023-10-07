import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { css } from '../../../../consts';
import { data } from '../../data';
import SelectedWheatherCondition from './SelectedWheatherCondition';
import WheatherCondition from './WheatherCondition';

export const WheatherConditions = () => {
  const { wheatherCondition } = useSelector((state: any) => state.filter);

  const renderConditionBox = (condition) => {
    if (wheatherCondition === condition) {
      return <SelectedWheatherCondition condition={wheatherCondition} />;
    }

    return <WheatherCondition condition={condition} />;
  };

  return (
    <>
      <Text style={styles.title}>Conditions</Text>
      <View style={styles.container}>
        {data.wheatherConditions?.map((condition) => (
          <View key={condition}>{renderConditionBox(condition)}</View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: css.size.text20,
    textAlign: 'center',
  },
});
