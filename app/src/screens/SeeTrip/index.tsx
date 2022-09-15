import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import { RootState } from '../../Redux/Store';
import { useDispatch, useSelector } from 'react-redux';

export default function FindWayScreen({navigation}) {
  var schools = useSelector((state:RootState) => state.School);
  var qtdStudents = schools.map((currSchool) => currSchool[1]);
  var capacity = 15;
  var n = qtdStudents.length;
  var result;
  var memo = Array(15);

    function knapsack(n,capacity,qtdStudents){
        if(n == 0 || capacity == 0){
            return 0;
        }
        if(qtdStudents[n] > capacity){
            memo[capacity-1][n] = memo[capacity-1][n-1];
            return memo[capacity-1][n];
        }
            let aux = capacity-qtdStudents[n];
            memo[capacity-1][n] = Math.max(aux+knapsack(n-1, aux, qtdStudents), knapsack(n-1,capacity,qtdStudents));
            return memo[capacity-1][n];
    }

    function alertResult(){
        for(let i=0;i<memo.length;i++){
            memo[i] = new Array(n).fill(-1);
        }
        for(let i=0;i<memo.length;i++){
            memo[i][0] = 0;
        }
        knapsack(n-1, capacity, qtdStudents);
        Alert.alert(memo[capacity-1][n-1].toString());
    }

    return (
        <View style={styles.container}>

            <Button
            onPress={() => alertResult()}
            title="Mostrar Máximo de alunos"
            color="#841584"
            />
            <StatusBar style="auto" />
        </View>
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