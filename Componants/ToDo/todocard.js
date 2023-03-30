import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';




function TodoCard(prop) {

    const elem = (

        <Pressable style= {styles.cardbox}>
            <Text>{prop.todo}</Text>
            <Text> {prop.completed? 'Completed': 'Not'}</Text>
            <Text>{prop.priority}</Text>

        </Pressable>


    );

    return elem;
    
};

export default TodoCard;


const styles = StyleSheet.create({
    cardbox :{

        borderColor : '#d8d8d8',
        borderWidth : 2,
        borderRadius :10,
        padding :'5%',
        margin : '1%',
    }




})