import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, css, sizes } from '../consts';
import { IMessageBoxProps } from '../types';

export const MessageBox: React.FC<IMessageBoxProps> = React.memo(
  ({ errorMessage = '', successMessage = '', clearMessage }) => {
    const [visible, setVisible] = useState(true);

    const message = errorMessage || successMessage;
    const messageType = errorMessage ? 'error' : 'success';
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.ValueXY()).current;
    const progressWidth = useRef(new Animated.Value(1)).current;

    // Icon
    let IconComponent;
    let iconName;
    let iconColor;
    if (messageType === 'error') {
      IconComponent = MaterialIcons;
      iconName = 'error-outline';
      iconColor = colors.red;
    } else {
      IconComponent = Ionicons;
      iconName = 'checkmark-circle-outline';
      iconColor = colors.green;
    }

    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: position.x }], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (e, { dx }) => {
          if (Math.abs(dx) > 50) {
            setVisible(false);
            clearMessage();
          } else {
            Animated.spring(position, {
              toValue: { x: 0, y: 0 },
              useNativeDriver: true,
            }).start();
          }
        },
      })
    ).current;

    useEffect(() => {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.timing(progressWidth, {
            toValue: 0,
            duration: 4000,
            useNativeDriver: false,
          }),
          Animated.delay(4000),
        ]),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setVisible(false);
        clearMessage();
      });
    }, []);

    if (!visible) return null;

    return (
      <Animated.View
        style={[
          styles.message,
          {
            opacity,
            transform: [...position.getTranslateTransform()],
            borderColor: iconColor,
          },
        ]}
        {...panResponder.panHandlers}
      >
        <View style={styles.container}>
          <IconComponent
            name={iconName}
            size={sizes.iconSizeMiddle}
            color={iconColor}
          />
          <Text style={styles.text}>{message}</Text>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
              clearMessage();
            }}
            style={styles.cross}
          >
            <Entypo name="cross" color={iconColor} size={sizes.iconSize16} />
          </TouchableOpacity>
        </View>
        <Animated.View
          style={[
            styles.progress,
            {
              backgroundColor: iconColor,
              width: progressWidth.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    maxWidth: '90%',
    position: 'relative',
  },
  message: {
    padding: 10,
    borderRadius: css.borderRadiusMax,
    flexShrink: 1,
    borderWidth: 1,
    ...css.shadow,
  },
  text: {
    fontSize: sizes.text16,
  },
  cross: {
    position: 'absolute',
    top: -10,
    right: -35,
  },
  progress: {
    height: 5,
    position: 'absolute',
    bottom: 0,
    left: 3,
    borderBottomLeftRadius: css.borderRadiusMax,
  },
});
