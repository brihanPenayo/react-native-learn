import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const onPress = (place) => () => {
    navigation.navigate(place)
  }

  return (
    <View style={styles.viewSt}>
      <Text style={styles.text}>Hola Mundo!</Text>
      <Button onPress={onPress("Ejercicio1")} title="Ir a Ejercicio 1" />
      <TouchableOpacity onPress={onPress("Ejercicio2")}>
        <Text style={styles.textTch}>Ir a Ejercicio 2</Text>
      </TouchableOpacity>
      <Button onPress={onPress("Components")} title="Ir a ComponentScreen" />
      <TouchableOpacity onPress={onPress("ImageScreen")}>
        <Text style={styles.textTch}>Ir a ImageScreen</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  viewSt: {
    padding: 20
  },
  text: {
    fontSize: 30,
  },
  textTch: {
    marginVertical: 20,
    textAlign: "center"
  }
});

export default HomeScreen;
