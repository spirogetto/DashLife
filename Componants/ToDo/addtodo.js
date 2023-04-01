import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { addNewTodo } from '../../firebase/firebaseCRUD';
import { colorList } from '../../misc/color';

function AddTodo(prop) {

    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    

    function adding (){
        //up to data base
        addNewTodo({title:title,description:description, completed : false})

    };

    const elem  = (

        <KeyboardAvoidingView style =  {styles.addtodocontainer}> 
            <TextInput
            placeholder= 'Title'
            style = {styles.todoinput}
            // returnKeyType = 'done'
            // onSubmitEditing={()=> adding() }
            onChangeText ={(val => settitle(val))}
            />

            <TextInput
            placeholder= 'Description...'
            style = {styles.todoinput}
            returnKeyType = 'done'
            onSubmitEditing={()=> adding() }
            onChangeText ={(val => setdescription(val))}
            />

            
        </KeyboardAvoidingView>
    );

    return elem;
    
}

export default AddTodo;


const styles = StyleSheet.create({
    addtodocontainer: {
        backgroundColor :colorList[0],
        margin: 10,
        borderRadius : 10,
      
    },
  
   todoinput : {

    borderBottomColor : '#d8d8d8',
    borderStyle : 'solid',
    borderBottomWidth :2,
    padding : 10,
    margin : 15,
    backgroundColor : '#FFFF',
    borderRadius : 10,
   },





  });
  