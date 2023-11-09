import React from 'react';
import { View } from 'react-native';
import { Property } from '../ui/Property';

interface IPropertiesProps {
  color: string;
  composition: string;
  gender: string;
}

export const Properties: React.FC<IPropertiesProps> = React.memo(
  ({ color, composition, gender }) => {
    return (
      <View>
        {color && <Property label="Color:" text={color} />}
        {composition && <Property label="Composition:" text={composition} />}
        {gender && <Property label="Gender:" text={gender} />}
        <Property label="Size:" />
      </View>
    );
  }
);
