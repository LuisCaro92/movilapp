import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import ButtonGradient from "./Button";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image  
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQamZtFyOo--PFD5zvWgIfCOOZkqKc7INr9w&usqp=CAU"}} 
        style={{width:200, height:200, marginBottom:60}}
        />
      </View>
      
      <Text style={styles.titulo}>Bienvenido!!</Text>
      <Text style={styles.subTitulo}>Ingresa con tu cuenta</Text>
      <TextInput style={styles.input} placeholder="Usuario" />
      <TextInput style={styles.input} placeholder="Contraseña" />
      <ButtonGradient/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    color: "#ffd700"
  },
  subTitulo: {
    fontSize: 20,
    color: "gray",
    textAlign: "left",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 40,
    width: "80%",
    height: 40,
    padding: 10,
    paddingStart: 20,
    margin: 10,
    textAlign: "left",
    backgroundColor: "white",
  }
 
  
});
