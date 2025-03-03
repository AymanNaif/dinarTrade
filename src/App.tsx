import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ListScreen from './screens/ListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import DetailsScreen from './screens/DetailsScreen/DetailsScreen';
import CustomHeader from './components/CustomHeader';
import DetailsCustomHeader from './components/CustomHeader/details';

export type RootStackParamList = {
  Login: undefined;
  List: undefined;
  Details: {itemId: string};
};
const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigator initialRouteName="Login">
          <Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Screen
            name="List"
            component={ListScreen}
            options={{header: () => <CustomHeader />}}
          />

          <Screen
            name="Details"
            component={DetailsScreen}
            options={{
              header: () => <DetailsCustomHeader />,
            }}
          />
        </Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
// to sign in use those ::
// email: user@test.com
// password: 123456
