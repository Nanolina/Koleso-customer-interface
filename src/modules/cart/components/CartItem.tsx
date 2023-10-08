import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PriceContainer } from '../../../components/PriceContainer';
import { css } from '../../../consts';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { Gradient } from '../../../ui/Gradient';

// For Gradient
const colorsWithOpacity = [css.colors.pinkOpacity, css.colors.purpleOpacity];

export const CartItem = ({
  //   imageUrl,
  //   price,
  //   oldPrice,
  //   title,
  //   size,
  //   color,
  item,

  quantity = 1,
  onIncrease,
  onDecrease,
  onRemove,
  onFavoriteToggle,
  isChecked,
  onCheckboxToggle,
}: any) => (
  <View style={styles.container}>
    <CheckboxItem onToggle={() => {}} />

    <Image source={{ uri: item.image }} style={styles.image} />

    <View style={styles.detailsContainer}>
      <PriceContainer
        price={item.price}
        oldPrice={item.oldPrice}
        priceSize={css.size.text16}
      />

      <Text style={styles.title}>{item.title}</Text>
      <View>
        <Text>
          Size: <Text style={styles.text}>{item.size}</Text>
        </Text>
        <Text>
          Color: <Text style={styles.text}>{item.color}</Text>
        </Text>
      </View>
    </View>

    <View style={styles.rightActions}>
      <TouchableOpacity onPress={onRemove}>
        <MaterialIcons
          name="delete"
          size={css.iconSizeMax}
          color={css.colors.main}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onFavoriteToggle}>
        <MaterialIcons
          name="favorite-border"
          size={css.iconSizeMax}
          color={css.colors.main}
        />
      </TouchableOpacity>

      <View style={styles.quantityControls}>
        <TouchableOpacity>
          <Gradient colors={colorsWithOpacity} style={styles.gradient}>
            <Text style={styles.quantity}>-</Text>
          </Gradient>
        </TouchableOpacity>

        <Gradient style={styles.gradient}>
          <Text style={styles.quantity}>{quantity}</Text>
        </Gradient>

        <TouchableOpacity>
          <Gradient colors={colorsWithOpacity} style={styles.gradient}>
            <Text style={styles.quantity}>+</Text>
          </Gradient>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: css.borderRadius,
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'flex-start',
    gap: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: css.size.text18,
  },
  rightActions: {
    alignItems: 'center',
    gap: 5,
  },
  quantityControls: {
    flexDirection: 'row',
    gap: 5,
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: css.size.text20,
    color: css.colors.white,
  },
  text: {
    fontWeight: 'bold',
  },
  gradient: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
