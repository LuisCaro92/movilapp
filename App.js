import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
     
      <Text style={styles.titulo}>Bienvenido!!</Text>
      <Text style={styles.subTitulo}>Ingresa con tu cuenta</Text>
      <TextInput style={styles.input} placeholder="Usuario" />
      <TextInput style={styles.input} placeholder="Contraseña" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:40,
    fontWeight:"bold",
    textAlign:"left"
  },
  subTitulo:{
    fontSize:20,
    color: "gray",
    textAlign:"left"
    
  },
  input:{
    borderWidth:1,
    borderColor:"gray",
    borderRadius:40,
    width:"80%",
    height:40,
    padding:10,
    paddingStart:20,
    margin:10,
    textAlign:"left",
    backgroundColor:"white"
  },
  imagen:{

  }

});
