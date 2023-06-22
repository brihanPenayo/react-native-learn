import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export const Ejercicio2 = () => {
    const friends = [
        { name: "Amigo", age: 24 },
        { name: "Amigo2", age: 42 },
        { name: "Amigo3", age: 28 },
        { name: "Amigo4", age: 32 },
        { name: "Amigo5", age: 36 },
    ]
    return (
        <FlatList
            data={friends}
            keyExtractor={friend => friend.name}
            renderItem={({ item }) => {
                return <Text style={st.txtSt}>Friend name is: {item.name}, and is {item.age} years old</Text>
            }}
        />
    )
}

const st = StyleSheet.create({
    txtSt: {
        marginVertical: 30,
        marginLeft: 30
    }
})