import { StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../../consts';
import { IContactProps, contacts } from '../consts';
import { Contact } from './Contact';

export const Contacts: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Contact us in a convenient way</Text>
      <View style={styles.container}>
        {contacts.map((contact: IContactProps) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 20,
    gap: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: sizes.text20,
    textAlign: 'center',
  },
});
