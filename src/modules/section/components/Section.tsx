import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { selectSection } from '../../../../redux/slices/catalogSlice';
import { css } from '../../../consts';
import { WebCardWrapper } from '../../../ui/WebCardWrapper';

const { width } = Dimensions.get('window');

export const Section: React.FC<any> = ({ section }) => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  return (
    <WebCardWrapper cardWidth={width}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          dispatch(selectSection(section));
          navigation.navigate('CategoriesPage');
        }}
      >
        <Image source={section.image} style={styles.image} />
        <Text style={styles.text}>{section.title}</Text>
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
    borderRadius: css.borderRadiusMax,
  },
  text: {
    fontSize: Platform.OS === 'web' ? css.size.text20 : css.size.text16,
    fontWeight: 'bold',
  },
});
