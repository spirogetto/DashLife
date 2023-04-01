import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import TodoBoard from './ToDo/todoboard';
import Login from './auth/Login';
import TodoMain from './ToDo/todoMain';
import TaskMain from './Task/TaskMain';

function MainScreen(){
    const elem = (
    <View>

        {/* <TodoMain/> */}
        <TaskMain/>
        
    </View>
    );

    return elem;

}

export default MainScreen;