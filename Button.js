import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "react-native-svg";

export default function ButtonGradient(){

    return(
        <View>
        <Button
        title="Ingresa"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
      styles={styles.buttonGoogle}
      title="Ingresa con tu correo"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
    </View>
    );
}

const styles = StyleSheet.create({
    buttonGoogle: {
      flex: 1,
      margin:10,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center",
    },
    correo: {
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "left",
      color: "#ffd700"
    },

  });