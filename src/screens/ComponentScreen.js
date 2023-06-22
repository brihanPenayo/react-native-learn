import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ComponentScreen = () => {
    const TEXT_COMP = "Probando"
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Hola Mundo</Text>
            <Text>{TEXT_COMP}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
    viewStyle: {
        textAlign: "center",
        padding: 30
    }
})