import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../../consts';
import { contacts } from '../consts';
import { IContactProps } from '../types';
import { Contact } from './Contact';

export const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{t('contacts.title')}</Text>
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
