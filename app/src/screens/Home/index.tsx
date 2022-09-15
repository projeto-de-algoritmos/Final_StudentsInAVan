import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, useWindowDimensions } from 'react-native';

export default function Home({navigation}) {
  
    return (

    <SafeAreaView style={styles.container}>
      <View>
        <View style={{margin: 10}}>
            <Button
            onPress={() => navigation.navigate("Nova escola")}
            title="Adicionar colégio"
            color="#841584"
            //accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View>
            <Button
            onPress={() => navigation.navigate("Rotas")}
            title="Ver viagens"
            color="#841584"
            //accessibilityLabel="Learn more about this purple button"
            />
          </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    textAlign: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});