import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { IMessageBox } from '../types';

export const MessageBox: React.FC<IMessageBox> = React.memo(
  ({ errorMessage = '', successMessage = '' }) => {
    useEffect(() => {
      if (errorMessage) {
        Toast.show({
          type: 'error',
          text1: errorMessage,
        });
      }

      if (successMessage) {
        Toast.show({
          type: 'success',
          text1: successMessage,
        });
      }
    }, [errorMessage, successMessage]);

    return <Toast />;
  }
);
