import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ambiances from './AmbianceData';
import AmbianceTile from './AmbianceTile';

export default function Ambiance() {
    return (
      <ScrollView style={styles.container}>
      <Text style={styles.title}>Ambiances</Text>
      <View style={styles.tile}>
        {ambiances.map((ambiance: { name: string; image: string; link: string; }, index) => 
          <AmbianceTile
            name={ambiance.name}
            image={ambiance.image}
            link={ambiance.link}
            key={index}
            />
            )}
      </View>
    </ScrollView>
    );
  }


  const styles = StyleSheet.create({
    tile: {
      display: "flex",
      textAlign: 'center',
      marginBottom: 25
    },
    container: {
      backgroundColor: '#fff',
      marginTop: 100,
    },
    title: {
      textAlign: 'center',
      alignItems: 'center',
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
  