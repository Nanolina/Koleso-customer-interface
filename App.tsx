import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import AppInner from './src/AppInner.tsx';
import './src/i18n/i18n.ts';
import store from './src/redux/store.ts';

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <AppInner />
      </Provider>
    </PaperProvider>
  );
}
