import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import AddTodo from './addtodo';
import TodoCard from './todocard';
import demodata from '../LocalData/demoData.json'

function TodoBoard() {

    // this is the main todo board where are two parts

    const elem = (
    <View style = {styles.boardbox}>

        {/* first part is that you have to add a todo */}
        <View style = {[styles.addbox,styles.addshadow]}>
            <AddTodo/> 
        </View>

       <ScrollView style = {styles.cardbox}>

            {/* ---Here we will create cards that are list of todos actually  --- */}

            {
                demodata.map((eachtodo)=>{

                    const rend = (
                        <TodoCard
                         todo = {eachtodo.task}
                         completed = {eachtodo.completed}
                         priority = {eachtodo.priority}
                        />
                    );
                    return rend;

                })
            }
            

        </ScrollView>


    </View>

    );

    return elem;
    
};

export default TodoBoard;


const styles = StyleSheet.create({
    boardbox :{
       
    
        width : 320,
        borderColor : '#d8d8d8',
        borderWidth : 2,
        borderRadius :10,
        padding :'1%',
        margin : 15,
       

    },
   
   
    addbox : {
        backgroundColor : '#ff9',
        borderColor : '#d8d8d8',
        borderWidth : 2,
        borderRadius :10,
        padding :'5%',
        margin : '1%',
      

    

   },

    addshadow : {
        shadowColor: '#171717',
        shadowOffset: {width: -20, height: 24},
        shadowOpacity: 1,
        shadowRadius: 3,
    },

   cardbox : {
    borderColor : '#d8d8d8',
    borderWidth : 2,
    borderRadius :10,
    padding :'5%',
    margin : '1%',
    


   }
  });
  