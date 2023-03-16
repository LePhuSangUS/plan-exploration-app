import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import { Home, PlantDetail } from '../screens';
import { Text } from 'react-native';
import BottomTabsNavigation from "./BottomTabsNavigation";
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
      <Stack.Navigator
    
          screenOptions={({ route }) =>({
              headerShown: false,

          })}
          
          initialRouteName='Home'>
      <Stack.Screen name="Home" component={BottomTabsNavigation} />
      <Stack.Screen name="PlantDetail" component={PlantDetail} />
    </Stack.Navigator>
  );
}
