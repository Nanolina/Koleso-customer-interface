import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors, sizes } from '../../../consts';
import { Icon } from '../../../ui/Icon';
import { gapBetweenDetails } from '../consts';

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setOpenMenu(!openMenu)}>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={sizes.iconSizeMax}
          color={colors.gray}
        />
      </TouchableOpacity>

      {openMenu && (
        <>
          <Icon name="favorite-border" />
          <Icon name="delete" />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -10,
    gap: gapBetweenDetails,
  },
});
