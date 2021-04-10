import React, { useEffect, useState } from 'react';
import {StyleSheet, StatusBar, SafeAreaView, Text, View, Button } from 'react-native';
import { decode, encode } from 'base-64';
import Auth from './src/components/Auth';
import firebase from './src/utils/firebase';
import 'firebase/auth';
import ListBirthday from './src/components/ListBirthday';


import { LogBox } from 'react-native';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();

/** */

if(!global.btoa) global.btoa = encode;
if(!global.atob) global.atob = decode;


console.disableYellowBox = true;
console.ignoredYellowBox = ["Setting a timer"];
// YellowBox.ignoreWarnings("Setting a timer");

export default function App() {
  const [user, setUser] = useState(undefined);


  // firebase.auth().signOut();
 
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
      console.log(response);
    });
  }, []);

  if (user === undefined){
    return null;
  }
  // console.log(user.id);


  return (
    <>
    <StatusBar  barStyle='light-content' />
    <SafeAreaView style={styles.background}>
        { user ? <ListBirthday user={user} /> : <Auth/>}
    </SafeAreaView>
    </>
  )
}




const styles = StyleSheet.create({
  background: {
    backgroundColor: "#15212b" ,
    height: "100%",

  }
})