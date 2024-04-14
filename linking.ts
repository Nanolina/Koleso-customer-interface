export const linking = {
  prefixes: ['http://localhost:19006', 'exp://192.168.68.106:8081'],
  config: {
    screens: {
      Home: '',
      Main: 'main',
      SignUpPage: 'signup',
      LoginPage: 'login',
      EmailCodePage: 'codes/:codeType/verify',
      SetNewPasswordPage: 'passwords/set',
      RequestPasswordRecoveryPage: 'passwords/recovery',
      SectionsPage: 'sections',
      CategoriesPage: 'categories',
      SubcategoriesPage: 'subcategories',
      ItemPage: 'item/:itemId',
      SortPage: 'sort',
      FilterPage: 'filter',
      FilterCheckboxPage: 'filter-checkbox',
      CartPage: 'cart',
      OrderProcessingPage: {
        path: 'order-processing',
        parse: {
          itemId: (itemId) => `${itemId}`,
        },
        screens: {
          Return: 'return/:itemId',
          Checkout: 'checkout',
        },
      },
      PaymentPage: 'payment',
      MyAccount: 'my-account',
      SettingsPage: 'settings',
      SettingsCheckboxPage: 'settings-checkbox',
      SettingsInputPage: 'settings-input',
      SettingsBirthdayPage: 'settings-birthday',
      SettingsPasswordPage: 'settings-password',
      PurchasesPage: 'purchases',
      ReturnsPage: 'returns',
      FinancesPage: 'finances',
      ContactsPage: 'contacts',
      Favorites: 'favorites',
      NotificationsPage: 'notifications',
      AddressForm: 'address-form',
    },
  },
};
