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
  var memo = Array(16);
  var catched = Array(16);
  var escolasArr = [];
  let valNotCatch = 0;
  let valCatch = 0;
  sum = 0;

    function knapsack(n,capacity,qtdStudents){
        if(n == -1 || capacity == 0){
            return 0;
        }
        if(capacity - qtdStudents[n] < 0){
            memo[capacity][n+1] = knapsack(n-1,capacity,qtdStudents);
            return memo[capacity][n+1];
        }

        let aux = capacity-qtdStudents[n];
        let valCatch = qtdStudents[n] + knapsack(n-1, aux, qtdStudents);
        let valNotCatch = knapsack(n-1,capacity,qtdStudents);

        if(valCatch > valNotCatch){
            memo[capacity][n+1] = valCatch;
            catched[capacity][n+1] = 1; 
            sum+=valCatch;
        }
        else{
            memo[capacity][n+1] = valNotCatch;
            catched[capacity][n+1] = 0;
            sum+=valNotCatch;
        }

        return memo[capacity][n+1];
    }

    function takeCatched(n, capacity){
        console.log("n: ",n,"capacidade: ",capacity);
        if(capacity == 0 || n == 0){
            return;
        }
        if(catched[capacity][n] == 1){
            escolasArr.push(qtdStudents[n-1]);
            takeCatched(n, capacity-qtdStudents[n-1]);
        }
        else{
            takeCatched(n-1, capacity);
        }
    }

    function alertResult(){
        valNotCatch = 0;
        valCatch = 0;
        for(let i=0;i<memo.length;i++){
            memo[i] = new Array(n+1).fill(-1);
            catched[i] = new Array(n+1).fill(0);
        }

        for(let i=0;i<memo.length;i++){
            memo[i][0] = 0;
        }
        knapsack(n-1, capacity, qtdStudents);
        console.log("separa aki pra mim");
        takeCatched(n, capacity);
        Alert.alert(memo[capacity][n].toString());
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