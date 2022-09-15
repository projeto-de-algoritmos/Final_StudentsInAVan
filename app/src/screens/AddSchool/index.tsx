import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Alert } from 'react-native';

import { RootState } from '../../Redux/Store';
import { addSchool } from '../../Redux/feat/SchoolSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function AddSchool({navigation}) {
  const dispatch = useDispatch();
  var schools = useSelector((state:RootState) => state.School);
    
  const [kidsNumber, setKidsNumber] = React.useState(null);
  const [schoolName, setSchoolName] = React.useState('');
    
  function verifyList(schoolName){ 
    if(schools.find((currSchool)=> schoolName  == currSchool[0]) == undefined){
        return false;
    }
    return true;
  }

  function newSchool(schoolName, kidsNumber){
      //console.log("bora ne");
      if(!verifyList(schoolName)){
        dispatch(addSchool([schoolName,Number(kidsNumber)]));
        Alert.alert("Colégio adicionado.");
      }
      else{
        Alert.alert("Colégio já foi adicionado anteriormente");
      }
    }

    return (

    <SafeAreaView style={styles.container}>
      <Text>Adicione sua escola</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={setSchoolName}
        value={schoolName}
        placeholder="Colégio"
        keyboardType="default"
      />
      <Text>Adicione o número de alunos do colégio</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={setKidsNumber}
        value={kidsNumber}
        placeholder="Alunos"
        keyboardType="decimal-pad"
    />

        <Button
        onPress={() => newSchool(schoolName,kidsNumber)}
        title="Adicionar colégio"
        color="#841584"
        //accessibilityLabel="Learn more about this purple button"
        />
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