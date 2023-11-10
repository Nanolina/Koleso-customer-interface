import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleActiveIcon } from '../../redux/slices/footerSlice';
import { css } from '../consts';
import { IFooterState } from '../types';
import { IconFooter } from '../ui/IconFooter';

const { height } = Dimensions.get('window');
const footerHeight = height / 10;

export const Footer: React.FC = React.memo(() => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const dispatch = useDispatch();

  const activeIcon = useSelector(
    (state: IFooterState) => state.footer.activeIcon
  );

  const handlePress = useCallback(
    (routeName: string, iconName: string) => {
      dispatch(toggleActiveIcon(iconName));
      navigation.navigate(routeName);
    },
    [dispatch, navigation]
  );

  return (
    <View style={styles.footer}>
      <SafeAreaView style={styles.iconContainer}>
        {[
          { name: 'home', route: 'Home' },
          { name: 'search', route: 'SectionsPage' },
          { name: 'notifications', route: 'NotificationsPage' },
          { name: 'shopping-cart', route: 'CartPage' },
          { name: 'favorite', route: 'Favorites' },
          { name: 'person', route: 'MyAccount' },
        ].map((icon) => (
          <TouchableOpacity
            key={icon.route}
            onPress={() => handlePress(icon.route, icon.name)}
          >
            <IconFooter name={icon.name} active={activeIcon === icon.name} />
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </View>
  );
});

const styles = StyleSheet.create({
  footer: {
    height: footerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    position: 'relative',
    ...css.shadow,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
