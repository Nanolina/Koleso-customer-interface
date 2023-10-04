import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { css } from '../../../consts';
import { WebCardWrapper } from '../../../ui/WebCardWrapper';

const { width } = Dimensions.get('window');

export const Subcategory: React.FC<any> = ({ subcategory }) => {
  return (
    <WebCardWrapper cardWidth={width}>
      <TouchableOpacity style={styles.container}>
        <Image source={subcategory.image} style={styles.image} />
        <Text style={styles.text}>{subcategory.title}</Text>
      </TouchableOpacity>
    </WebCardWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: Platform.OS === 'web' ? 100 : 10,
  },
  image: {
    width: Platform.OS === 'web' ? 100 : 50,
    height: Platform.OS === 'web' ? 100 : 50,
    resizeMode: 'cover',
    borderRadius: css.borderRadius,
  },
  text: {
    fontSize: Platform.OS === 'web' ? css.size.text20 : css.size.text16,
    fontWeight: 'bold',
  },
});
