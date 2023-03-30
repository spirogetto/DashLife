import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import MainScreen from './Componants/main';

export default function App() {
  return (
    <View style={styles.container}>

      <MainScreen/>
      
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

  btn: {
    backgroundColor : '#d8d8d8',
    margin : 10,
    borderWidth : 2,
    borderRadius : 10


  }
});
