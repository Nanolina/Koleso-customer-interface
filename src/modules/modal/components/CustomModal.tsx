import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { css } from '../../../consts';
import { Gradient } from '../../../ui/Gradient';

export const CustomModal = ({ children, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={true}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <Gradient style={styles.gradient}>
          {children}

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.text}>Close</Text>
          </TouchableOpacity>
        </Gradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  gradient: {
    width: '80%',
    padding: 20,
    borderRadius: css.borderRadiusMax,
    alignItems: 'center',
    gap: 30,
  },
  text: {
    color: css.colors.white,
    textDecorationLine: 'underline',
  },
});
