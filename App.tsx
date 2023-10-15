import {
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  useFonts,
} from '@expo-google-fonts/open-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CartPage } from './src/pages/CartPage';
import { CategoriesPage } from './src/pages/CategoriesPage';
import { CheckoutPage } from './src/pages/CheckoutPage';
import { Home } from './src/pages/Home';
import { ItemPage } from './src/pages/ItemPage';
import { Main } from './src/pages/Main';
import { MyAccount } from './src/pages/MyAccount';
import { PaymentPage } from './src/pages/PaymentPage';
import { SectionsPage } from './src/pages/SectionsPage';
import { SortPage } from './src/pages/SortPage';
import { SubcategoriesPage } from './src/pages/SubcategoriesPage';
import { LoginPage } from './src/pages/auth/LoginPage';
import { SignUpPage } from './src/pages/auth/SignUpPage';
import { SignUpPhoneEmailPage } from './src/pages/auth/SignUpPhoneEmailPage';
import { FilterCheckboxPage } from './src/pages/filter/FilterCheckboxPage';
import { FilterPage } from './src/pages/filter/FilterPage';
import { FilterWheatherPage } from './src/pages/filter/FilterWheatherPage';
import { SettingsBirthdayPage } from './src/pages/settings/SettingsBirthdayPage';
import { SettingsCheckboxPage } from './src/pages/settings/SettingsCheckboxPage';
import { SettingsInputPage } from './src/pages/settings/SettingsInputPage';
import { SettingsPage } from './src/pages/settings/SettingsPage';
import { SettingsPasswordPage } from './src/pages/settings/SettingsPasswordPage';

export default function App() {
  const Stack = createStackNavigator();

  // Fonts
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="SectionsPage" component={SectionsPage} />
            <Stack.Screen name="CategoriesPage" component={CategoriesPage} />
            <Stack.Screen
              name="SubcategoriesPage"
              component={SubcategoriesPage}
            />
            <Stack.Screen name="ItemPage" component={ItemPage} />
            <Stack.Screen name="SortPage" component={SortPage} />
            <Stack.Screen name="FilterPage" component={FilterPage} />
            <Stack.Screen
              name="FilterCheckboxPage"
              component={FilterCheckboxPage}
            />
            <Stack.Screen
              name="FilterWheatherPage"
              component={FilterWheatherPage}
            />
            <Stack.Screen name="CartPage" component={CartPage} />
            <Stack.Screen name="CheckoutPage" component={CheckoutPage} />
            <Stack.Screen name="PaymentPage" component={PaymentPage} />
            <Stack.Screen name="MyAccount" component={MyAccount} />
            <Stack.Screen name="SettingsPage" component={SettingsPage} />
            <Stack.Screen
              name="SettingsCheckboxPage"
              component={SettingsCheckboxPage}
            />
            <Stack.Screen
              name="SettingsInputPage"
              component={SettingsInputPage}
            />
            <Stack.Screen
              name="SettingsBirthdayPage"
              component={SettingsBirthdayPage}
            />
            <Stack.Screen
              name="SettingsPasswordPage"
              component={SettingsPasswordPage}
            />
            <Stack.Screen name="SignUpPage" component={SignUpPage} />
            <Stack.Screen
              name="SignUpPhoneEmailPage"
              component={SignUpPhoneEmailPage}
            />
            <Stack.Screen name="LoginPage" component={LoginPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}
