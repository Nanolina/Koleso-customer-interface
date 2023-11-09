import React, { useCallback } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, css } from '../../../consts';
import { IModalProps } from '../types';

export const CustomModal: React.FC<IModalProps> = React.memo(
  ({ children, onClose }) => {
    const handleClose = useCallback(() => {
      onClose();
    }, [onClose]);

    return (
      <Modal
        transparent={true}
        animationType="slide"
        visible={true}
        onRequestClose={handleClose}
      >
        <View style={styles.container}>
          <View style={styles.centerContainer}>
            {children}
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.text}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  centerContainer: {
    width: '80%',
    padding: 20,
    borderRadius: css.borderRadiusMax,
    alignItems: 'center',
    gap: 30,
    backgroundColor: colors.main,
  },
  text: {
    color: colors.white,
    textDecorationLine: 'underline',
  },
});
