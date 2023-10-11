import {
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  useFonts,
} from '@expo-google-fonts/open-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import { FilterCheckboxPage } from './src/pages/filter/FilterCheckboxPage';
import { FilterPage } from './src/pages/filter/FilterPage';
import { FilterWheatherPage } from './src/pages/filter/FilterWheatherPage';

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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
