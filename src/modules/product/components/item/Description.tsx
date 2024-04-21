import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { colors, sizes } from '../../../../consts';
import { IRootState } from '../../../../redux/rootReducer';

export const Description: React.FC = () => {
  const { description } = useSelector(
    (state: IRootState) => state.products.product
  );

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.descriptionContainer}>
      <TouchableOpacity
        onPress={toggleDescription}
        style={styles.textContainer}
      >
        <Text
          numberOfLines={isExpanded ? undefined : 1}
          ellipsizeMode="tail"
          style={styles.text}
        >
          {description}
        </Text>
        {description.length > 100 && (
          <Text style={styles.more}>{isExpanded ? 'less' : 'more'}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: 20,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: sizes.text15,
  },
  more: {
    color: colors.main,
  },
});
