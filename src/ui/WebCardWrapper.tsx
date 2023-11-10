import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { css } from '../consts';
import { IWebCardWrapperProps } from '../types';

export const WebCardWrapper: React.FC<IWebCardWrapperProps> = React.memo(
  ({ cardWidth, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const webStyles = isHovered
      ? { ...styles.hovered, maxWidth: cardWidth }
      : { flex: 1 };

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
  }
);

const styles = StyleSheet.create({
  hovered: {
    flex: 1,
    borderRadius: css.borderRadiusMax,
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
});
