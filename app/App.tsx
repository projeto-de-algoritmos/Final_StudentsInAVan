import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler'
import Routes from './src/Routes';
import {store} from './src/Redux/Store'
import { Provider } from 'react-redux';

export default function App() {
  return (
      <Provider store={store}>
        <Routes/>
      </Provider>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/