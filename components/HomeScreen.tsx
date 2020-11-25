import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function HomeScreen({ navigation }){
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Ambi Sense</Text>
      <Image source={{ uri: 'https://www.iphon.fr/app/uploads/2018/08/nouvelles-lampes-philips-hue-sign-play-2.jpg' }} style={styles.logo} />
      <Text style={styles.instructions}>
        Ici, choisissez la fonctionnalité que vous souhaitez utiliser.
      </Text>

      <Button title="Ambiance" onPress={() => navigation.navigate('Ambiance')}/>
      
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
  