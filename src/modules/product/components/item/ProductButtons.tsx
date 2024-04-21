import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { colors, css } from '../../../../consts';
import { Button } from '../../../../ui/Button';
import { IProductButtonsProps } from '../../types';

export const ProductButtons: React.FC<IProductButtonsProps> = ({
  productId,
  variantId,
}) => {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState([]);
  console.log('cartItems', cartItems);
  const getCartItems = async () => {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      console.log('existingCart-getting', existingCart);
      return existingCart ? JSON.parse(existingCart) : [];
    } catch (error) {
      console.error('error when getting cart item', error);
      return [];
    }
  };

  const saveCartItem = async () => {
    try {
      const newCartItem = { productId, variantId };
      const updatedCart = [...cartItems, newCartItem];
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    } catch (error) {
      console.error('Error when adding item to cart:', error);
    }
  };

  const removeCartItem = async (variantId: string) => {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      let cart = existingCart ? JSON.parse(existingCart) : [];
      cart = cart.filter((variant) => variant.id !== variantId);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      await AsyncStorage.removeItem('cart');
    } catch (error) {
      console.error('Error clearing the cart:', error);
    }
  };
  // clearCart();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const existingCart = await AsyncStorage.getItem('cart');
        const cart = existingCart ? JSON.parse(existingCart) : [];
        setCartItems(cart);
      } catch (error) {
        console.error('Error when getting cart items:', error);
      }
    };

    fetchCart();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        text={t('addToCart')}
        width="100%"
        disabled={!variantId}
        onPress={saveCartItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: css.padding,
    backgroundColor: colors.white,
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
});
