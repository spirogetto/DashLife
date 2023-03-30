import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import TodoBoard from './ToDo/todoboard';

function MainScreen(){
    const elem2 = (
    <View>

        <TodoBoard/>
        
    </View>
    );

    return elem2;

}

export default MainScreen;