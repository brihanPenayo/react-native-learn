import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { color } from 'react-native-reanimated'

export const ListScreen = () => {
    const FRIENDS = [
        { name: "Cami" },
        { name: "Camila" },
        { name: "Camilita" },
        { name: "Camilolas" },
        { name: "Camisama" },
        { name: "Camikaze" },
        { name: "Caminos" },
    ]
    return (
        <FlatList
            data={FRIENDS}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            renderItem={({item}) => {
               return <Text style={st.textStyle}>- {item.name}</Text>
            }}/>
            )
}

const st = StyleSheet.create({
    textStyle: {
        marginVertical: 20,
        marginLeft: 20,
    },
})