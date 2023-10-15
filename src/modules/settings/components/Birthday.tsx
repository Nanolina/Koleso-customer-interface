import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import {
  DatePickerModal,
  enGB,
  registerTranslation,
} from 'react-native-paper-dates';

registerTranslation('en-GB', enGB);

export const Birthday = () => {
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);

  const onDismiss = () => {
    setOpen(false);
  };

  const onConfirm = (params) => {
    setOpen(false);
    setDate(params.date);
  };

  return (
    <>
      <Button title="Select Date" onPress={() => setOpen(true)} />
      <DatePickerModal
        locale="en-GB"
        mode="single"
        visible={open}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        date={date}
      />
      {date && <Text>{date.toDateString()}</Text>}
    </>
  );
};
