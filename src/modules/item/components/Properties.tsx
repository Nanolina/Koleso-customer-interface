import { View } from 'react-native';
import { Property } from '../ui/Property';

export const Properties = ({ color, composition, gender }) => {
  return (
    <View>
      {color && <Property label="Color:" text={color} />}
      {composition && <Property label="Composition:" text={composition} />}
      {gender && <Property label="Gender:" text={gender} />}
      <Property label="Size:" />
    </View>
  );
};
