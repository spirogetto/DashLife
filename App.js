import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import MainScreen from './Componants/main';
import { colorList } from './misc/color';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.colorBox}>
        <Button title='Todo' color={colorList[0]}/>
        <Button title='Finance' color={colorList[1]}/>
        <Button title='Task' color={colorList[2]}/>
        <Button title='Mood' color={colorList[3]}/>
        <Button title='Journal' color={colorList[4]}/>
        
      </View>

      <MainScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 60,
    marginBottom :20
  },

  btn: {
    backgroundColor : '#d8d8d8',
    margin : 10,
    borderWidth : 2,
    borderRadius : 10


  },

  colorBox: {
    justifyContent: 'center',
    flexDirection :'row',
    width :100,
    backgroundColor :colorList[2]
  }

});
