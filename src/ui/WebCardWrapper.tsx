import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { css } from '../consts';

export const WebCardWrapper = ({ cardWidth, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const styles = getStyles(cardWidth);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const webStyles = isHovered ? styles.hovered : { flex: 1 };

  if (Platform.OS === 'web') {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={webStyles}
      >
        {children}
      </div>
    );
  }

  return <View style={webStyles}>{children}</View>;
};

const getStyles = (cardWidth) =>
  StyleSheet.create({
    hovered: {
      flex: 1,
      borderRadius: css.borderRadiusMax,
      transform: 'scale(1.05)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      maxWidth: cardWidth,
    },
  });
