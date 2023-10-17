import { StyleSheet, Text, View } from 'react-native';
import { css } from '../../../consts';
import { contacts } from '../consts';
import { Contact } from './Contact';

export const Contacts = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Contact us in a convenient way</Text>
      <View style={styles.container}>
        {contacts.map((contact) => (
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
    fontSize: css.size.text20,
    textAlign: 'center',
  },
});
