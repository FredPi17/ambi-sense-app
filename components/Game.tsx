import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function Game(){
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Ambi Sense</Text>
      <Text style={styles.instructions}>
        Ici, c'est game
      </Text>
      
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
  