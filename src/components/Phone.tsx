import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { css, sizes } from '../consts';
import { ValidationError } from '../ui/ValidationError';

export const Phone: React.FC<any> = ({ phone, handleChange, errorsPhone }) => {
  const phoneInput = useRef<PhoneInput>(null);
  const onChangeFormattedText = (text) => {
    // Remove the '+' from the formatted phone number before saving it
    const formattedNumber = text.startsWith('+') ? text.substring(1) : text;
    handleChange('phone')(formattedNumber);
  };

  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phone}
        defaultCode="CY"
        layout="first"
        onChangeFormattedText={onChangeFormattedText}
        containerStyle={styles.phoneContainer}
        textInputStyle={styles.text}
        codeTextStyle={styles.text}
        autoFocus
      />
      {errorsPhone && <ValidationError error={errorsPhone} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  phoneContainer: {
    borderRadius: css.borderRadiusMin,
    ...css.shadow,
  },
  text: {
    fontSize: sizes.text16,
  },
});
