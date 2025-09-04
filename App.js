 import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Alert } from "react-native";
import logo from "./assets/logo.png";
import icone from "./assets/icone.png";
import { useState } from "react";

export default function App() {

  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);



  

const handleAdd = () => {
 //Alert.alert(tarefa);
 setTarefas([tarefa, ...tarefas]);
  setTarefa("");
}

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
        <Text>todo list</Text>
      </View>
      <View>
        <TextInput
          placeholder="Add Tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity onPress={handleAdd}>
        <Image source={icone} style={styles.icone} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 128,
    height: 128,
  },
  botaoAdd: {
    width: 32,
    height: 32,
  }
});