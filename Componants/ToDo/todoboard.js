import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import AddTodo from './addtodo';
import TodoCard from './todocard';
import demodata from '../LocalData/demoData.json'

function TodoBoard() {

    const elem = (
    <View style = {styles.boardbox}>
        <View style = {[styles.addbox,styles.addshadow]}>
            <AddTodo/>
        </View>
        <View style = {styles.cardbox}>

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
            

        </View>


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
  