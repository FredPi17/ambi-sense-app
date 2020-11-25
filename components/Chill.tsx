import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Sound from "react-native-sound";

export default function Chill(){
    function TurnOn() {
        fetch('http://192.168.1.151/api/a0LX7642KIvQXwCZ-Jp-pTSvH9C2ckxnNIENq-ak/lights/15/state', {
            method: 'PUT',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "on": true,
                "bri": 50,
                "transitiontime": 50,
                "ct": 500
            }),
        });

        var sound1 = new Sound('../medias/songs/chill.mp3');
            sound1.play(()=> {
                sound1.release();
            });
        };

    function TurnOff() {
        fetch('http://192.168.1.151/api/a0LX7642KIvQXwCZ-Jp-pTSvH9C2ckxnNIENq-ak/lights/15/state', {
            method: 'PUT',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "on": false,
                "transitiontime": 50,
            }),
        });
    }        

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Ambi Sense</Text>
      <Text style={styles.instructions}>
        Ici, c'est chill
      </Text>
      <Button title="ON" onPress={() => TurnOn()}/>
      <Button title="OFF" onPress={() => TurnOff()}/>
  </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 100,
    },
    title: {
      marginTop: 0,
      marginBottom: 50,
      fontSize: 40,
      fontWeight: "bold",
    },
    logo: {
      width: 400,
      height: 200,
      marginBottom: 20,
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
      textAlign: "center"
    },
    button: {
      backgroundColor: "blue",
      padding: 20,
      borderRadius: 5,
      marginBottom: 20,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
    }, 
  });
  