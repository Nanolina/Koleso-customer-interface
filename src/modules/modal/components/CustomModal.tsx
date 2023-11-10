import React, { useCallback } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { colors, css } from '../../../consts';
import { Button } from '../../../ui/Button';
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
            <Button
              text="Close"
              onPress={onClose}
              backgroundColor={colors.white}
              textColor={colors.main}
              isBold={false}
              width="50%"
              hasShadow
            />
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
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  centerContainer: {
    width: '80%',
    padding: 20,
    borderRadius: css.borderRadiusMax,
    alignItems: 'center',
    gap: 30,
    ...css.shadow,
    shadowOpacity: 0.8,
  },
});
