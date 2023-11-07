import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors, sizes } from '../../../consts';
import { Icon } from '../../../ui/Icon';
import { gapBetweenDetails } from '../consts';

export const Menu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
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
