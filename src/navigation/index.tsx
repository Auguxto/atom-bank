import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screens/splash';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
}
