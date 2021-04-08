import React, { useEffect, useState } from 'react';
import {StyleSheet, StatusBar, SafeAreaView, Text, View, Button } from 'react-native';
import Auth from './src/components/Auth';
import firebase from './src/utils/firebase';
import 'firebase/auth';
import ListBirthday from './src/components/ListBirthday';


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

  return (
    <>
    <StatusBar  barStyle='light-content' />
    <SafeAreaView style={styles.background}>
        { user ? <ListBirthday /> : <Auth/>}
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