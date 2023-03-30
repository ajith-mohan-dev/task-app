/**
 * Navigation
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EntryScreen from '../screens';
import UseCaseOneScreen from '../screens/use-case-one/UseCaseOneScreen';
import UseCaseTwoScreen from '../screens/use-case-two/UseCaseTwoScreen';
import {ScreenName} from './constants';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenName.EntryScreen}>
        <Stack.Screen name={ScreenName.EntryScreen} component={EntryScreen} />
        <Stack.Screen
          name={ScreenName.UseCaseOneScreen}
          component={UseCaseOneScreen}
        />
        <Stack.Screen
          name={ScreenName.UseCaseTwoScreen}
          component={UseCaseTwoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
