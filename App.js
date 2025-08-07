import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import imgLogo from ' ./assets/icon_todo_list.png';

export default function App() {
  return (
    <View style={styles.container}>
    <View>
      <Image source={imgLogo} />
    </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 128,
    height: 128
  }
 });

