import { StyleSheet, Text } from 'react-native';

interface IDetailProps {
  name: string;
  detail: string | number;
}

export const Detail: React.FC<IDetailProps> = ({ name, detail }) => {
  return (
    <Text>
      {name}: <Text style={styles.text}>{detail}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
});
