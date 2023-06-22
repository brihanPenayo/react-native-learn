import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Ejercicio1 = () => {
    const MY_NAME = "Brihan Penayo"
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.title}>
                Getting Started with React Native
            </Text>
            <Text style={styles.subTitle}>
                My name is {MY_NAME}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45
    },
    subTitle: {
        fontSize: 20
    },
    viewStyle: {
        padding: 30
    }
})