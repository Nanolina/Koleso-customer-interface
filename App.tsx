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
import { CategoriesPage } from './src/pages/CategoriesPage';
import { Home } from './src/pages/Home';
import { ItemPage } from './src/pages/ItemPage';
import { Main } from './src/pages/Main';
import { SectionsPage } from './src/pages/SectionsPage';
import { SortPage } from './src/pages/SortPage';
import { SubcategoriesPage } from './src/pages/SubcategoriesPage';
import { FilterPage } from './src/pages/filter/FilterPage';
import { FilterCheckboxPage } from './src/pages/filter/FilterCheckboxPage';

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
          <Stack.Screen name="FilterCheckboxPage" component={FilterCheckboxPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
