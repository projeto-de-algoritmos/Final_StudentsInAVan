import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from '../screens/Home';
import AddSchool from '../screens/AddSchool';
import SeeTrip from '../screens/SeeTrip';


export default function Routes() {
  
  const Stack = createStackNavigator();
  const ref = React.useRef(null);

  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name ="Home" component={Home}/>
        <Stack.Screen name ="Rotas" component={SeeTrip}/>
        <Stack.Screen name ="Nova escola" component={AddSchool}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});