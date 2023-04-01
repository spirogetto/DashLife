import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colorList } from '../../misc/color';
import { updateTask, updateTodo } from '../../firebase/firebaseCRUD';

let colorNo = 3;


function TaskCard(prop) {

        const obj = {hour : prop.hour-1};
        const id = prop.id; 
        
        prop.completed? colorNo =1 : colorNo =1;        
        function cardPress(){

            updateTask(id,obj)

        }

    const elem = (

        <Pressable style= {styles.cardbox}  onPress={() =>cardPress()}  >
            <Text style= {styles.taskCategory}>{prop.category}</Text>
            <Text>{prop.hour}hr {prop.minute}min</Text>

        </Pressable>


    );

    return elem;
    
};

export default TaskCard;


const styles = StyleSheet.create({
    cardbox :{

        borderColor : colorList[5],
        borderWidth : 2,
        borderRadius :10,
        padding :'5%',
        margin : '1%',
        backgroundColor : colorList[colorNo]
    },

    taskCategory :{
        color : colorList[5],
        alignSelf :'center',

    },

    todoDescription:{

    },
    todoComplete:{

    }




})