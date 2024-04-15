import * as SecureStore from 'expo-secure-store';

export async function readToken() {
  const token = await SecureStore.getItemAsync('token');
  console.log('token', token);
}
