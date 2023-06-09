import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colorList } from '../../misc/color';
import { updateTodo } from '../../firebase/firebaseCRUD';

let colorNo = 3;


function TodoCard(prop) {

        const obj = {completed : !prop.completed};
        const id = prop.id; 
        
        prop.completed? colorNo =1 : colorNo =1;        
        function cardPress(){

            updateTodo(id,obj)

        }

    const elem = (

        <Pressable style= {styles.cardbox}  onPress={() =>cardPress()}  >
            <Text style={styles.todoTitle}>{prop.title}</Text>
            <Text> {prop.completed? 'খতম করা হয়েছে': 'নাহ খতম হয় নাই!'}</Text>
            <Text>{prop.description}</Text>

        </Pressable>


    );

    return elem;
    
};

export default TodoCard;


const styles = StyleSheet.create({
    cardbox :{

        borderColor : colorList[5],
        borderWidth : 2,
        borderRadius :10,
        padding :'5%',
        margin : '1%',
        backgroundColor : colorList[colorNo]
    },

    todoTitle :{
        color : colorList[5],
        alignSelf :'center',

    },

    todoDescription:{

    },
    todoComplete:{

    }




})