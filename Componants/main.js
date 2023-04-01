import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import TodoBoard from './ToDo/todoboard';
import Login from './auth/Login';

function MainScreen(){
    const elem2 = (
    <View>

        <Login/>
        
    </View>
    );

    return elem2;

}

export default MainScreen;