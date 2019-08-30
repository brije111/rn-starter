import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentScreen = () => {
    return <View>
        <Text style={styleSheet.textStyle}>Thia is component screen</Text>
        <Text>This is secondary string</Text>
        </View>
}

const styleSheet = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
});

export default ComponentScreen;