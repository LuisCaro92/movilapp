import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "react-native-svg";

export default function ButtonGradient(){

    return(
    <TouchableOpacity
    style={styles.buttonGoogle}>
        <Text
        style={styles.texto}>Ingresa</Text>
    
    </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    buttonGoogle: {
        width:200,
        height:45,  
      margin:10,
      backgroundColor: "yellow",
      alignItems: "center",
      justifyContent: "center",
      borderRadius:40,
      elevation:5,
      
    },
    texto: {
     fontWeight: "bold",
    },
    

  });