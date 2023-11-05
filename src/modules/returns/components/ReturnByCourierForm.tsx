import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { addFieldReturn } from '../../../../redux/slices/returnSlice';
import { Form } from '../../../components/Form';
import { PriceInfoContainer } from '../../../components/PriceInfoContainer';
import { css } from '../../../consts';
import { Button } from '../../../ui/Button';
import { Hr } from '../../../ui/Hr';

export const ReturnByCourierForm = () => {
  const { name, phone, city, street, house, apartment, date, time, note } =
    useSelector((state: any) => state.return);

  return (
    <View style={css.form.container}>
      <Form
        name={name}
        phone={phone}
        city={city}
        street={street}
        house={house}
        apartment={apartment}
        date={date}
        time={time}
        note={note}
        addField={addFieldReturn}
        textDate="Date for return"
        textTime="Return time"
      />

      <Hr />

      <PriceInfoContainer
        isPurchase={false}
        quantity={1}
        priceForProducts={75}
        courierServices={5}
        totalPrice={70}
      />

      <View style={styles.button}>
        <Button
          text="Return"
          onPress={() => {}}
          width="50%"
          backgroundColor={css.colors.orange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-end',
  },
});
