import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ProductInfo from './screens/ProductInfo';
import HeaderCart from './components/HeaderCart';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            title: 'Produto',
            headerRight: () => <HeaderCart />,
            headerStyle: {
              backgroundColor: '#1dd1a1',
            },
            headerTintColor: '#fff',
          }}
          name="ProductInfo"
          component={ProductInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
