import {
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  useFonts,
} from '@expo-google-fonts/open-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { linking } from '../linking.ts';
import './i18n/i18n.ts';
import { AddressForm } from './pages/AddressForm';
import { CartPage } from './pages/CartPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ContactsPage } from './pages/ContactsPage';
import { Favorites } from './pages/Favorites';
import { FinancesPage } from './pages/FinancesPage';
import { Home } from './pages/Home';
import { Main } from './pages/Main';
import { MyAccount } from './pages/MyAccount';
import { NotificationsPage } from './pages/NotificationsPage';
import { OrderProcessingPage } from './pages/OrderProcessingPage';
import { PaymentPage } from './pages/PaymentPage';
import { ProductPage } from './pages/ProductPage.tsx';
import { PurchasesPage } from './pages/PurchasesPage';
import { ReturnsPage } from './pages/ReturnsPage';
import { SectionsPage } from './pages/SectionsPage';
import { SortPage } from './pages/SortPage';
import { SubcategoriesPage } from './pages/SubcategoriesPage';
import { EmailCodePage } from './pages/auth/EmailCodePage';
import { LoginPage } from './pages/auth/LoginPage';
import { RequestPasswordRecoveryPage } from './pages/auth/RequestPasswordRecoveryPage';
import { SetNewPasswordPage } from './pages/auth/SetNewPasswordPage';
import { SignUpPage } from './pages/auth/SignUpPage';
import { FilterCheckboxPage } from './pages/filter/FilterCheckboxPage';
import { FilterPage } from './pages/filter/FilterPage';
import { SettingsBirthdayPage } from './pages/settings/SettingsBirthdayPage';
import { SettingsCheckboxPage } from './pages/settings/SettingsCheckboxPage';
import { SettingsInputPage } from './pages/settings/SettingsInputPage';
import { SettingsPage } from './pages/settings/SettingsPage';
import { SettingsPasswordPage } from './pages/settings/SettingsPasswordPage';
import { AppDispatch } from './redux/store.ts';
import { handleCheckAuth } from './redux/thunks/user';
import { Loader } from './ui/Loader';

export default function AppInner() {
  const dispatch = useDispatch<AppDispatch>();
  const Stack = createStackNavigator();
  const [isInitialized, setIsInitialized] = useState(false);

  const token = useMemo(
    async () => await SecureStore.getItemAsync('token'),
    []
  );

  // Fonts
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_400Regular_Italic,
  });

  useEffect(() => {
    if (token) {
      dispatch(handleCheckAuth()).then(() => setIsInitialized(true));
    } else {
      setIsInitialized(true);
    }
  }, [dispatch, token]);

  if (!fontsLoaded || !isInitialized) {
    return <Loader />;
  }

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="SectionsPage" component={SectionsPage} />
        <Stack.Screen name="CategoriesPage" component={CategoriesPage} />
        <Stack.Screen name="SubcategoriesPage" component={SubcategoriesPage} />
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="SortPage" component={SortPage} />
        <Stack.Screen name="FilterPage" component={FilterPage} />
        <Stack.Screen
          name="FilterCheckboxPage"
          component={FilterCheckboxPage}
        />
        <Stack.Screen name="CartPage" component={CartPage} />
        <Stack.Screen
          name="OrderProcessingPage"
          component={OrderProcessingPage}
        />
        <Stack.Screen name="PaymentPage" component={PaymentPage} />
        <Stack.Screen name="MyAccount" component={MyAccount} />
        <Stack.Screen name="SettingsPage" component={SettingsPage} />
        <Stack.Screen
          name="SettingsCheckboxPage"
          component={SettingsCheckboxPage}
        />
        <Stack.Screen name="SettingsInputPage" component={SettingsInputPage} />
        <Stack.Screen
          name="SettingsBirthdayPage"
          component={SettingsBirthdayPage}
        />
        <Stack.Screen
          name="SettingsPasswordPage"
          component={SettingsPasswordPage}
        />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen
          name="RequestPasswordRecoveryPage"
          component={RequestPasswordRecoveryPage}
        />
        <Stack.Screen
          name="SetNewPasswordPage"
          component={SetNewPasswordPage}
        />
        <Stack.Screen name="EmailCodePage" component={EmailCodePage} />
        <Stack.Screen name="PurchasesPage" component={PurchasesPage} />
        <Stack.Screen name="ReturnsPage" component={ReturnsPage} />
        <Stack.Screen name="FinancesPage" component={FinancesPage} />
        <Stack.Screen name="ContactsPage" component={ContactsPage} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="NotificationsPage" component={NotificationsPage} />
        <Stack.Screen name="AddressForm" component={AddressForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
