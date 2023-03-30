import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

function AddTodo(prop) {

    const [demo,setdemo] = useState('');
    const [hold,sethold] = useState('');
    const place = 'Enter Todo';

    function adding (){
        //up to data base
        setdemo(hold)

    };

    const elem  = (

        <View style =  {styles.addtodocontainer}> 
            <TextInput
            placeholder= {place}
            style = {styles.todoinput}
            returnKeyType = 'done'
            onSubmitEditing={()=> adding() }
            onChangeText ={(val => sethold(val))}
            
            />

            <Text>{demo}</Text>
        </View>
    );

    return elem;
    
}

export default AddTodo;


const styles = StyleSheet.create({
    addtodocontainer: {
      
    },
  
   todoinput : {

    borderBottomColor : '#d8d8d8',
    borderStyle : 'solid',
    borderBottomWidth :2,
    padding : 10,
    margin : 10,
   },





  });
  