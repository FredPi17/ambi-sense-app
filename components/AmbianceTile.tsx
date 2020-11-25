import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, Image, Button, View} from 'react-native';
import 'react-native-gesture-handler';
import navigation from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function AmbianceTile({name, image, link }) {
    const navigation = useNavigation();

    return(
        <View style={styles.tile}>
            <Text style={styles.title}>{ name }</Text>
            <TouchableOpacity onPress={() => navigation.navigate( link )}>
                <Image source={{uri: image}} style={{width: 300, height: 180, alignSelf: 'center',}}></Image>
                <Button title="Choisir cette ambiance"/>
            </TouchableOpacity>
            
        </View>
    )
}

AmbianceTile.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: "center"
    },
    tile: {
        backgroundColor: "#DCDCDC",
        margin: 0,
        padding: 10,
        marginBottom: 10,
        borderRadius: 15,
    }
})
