import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {collection, getDocs} from 'firebase/firestore'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { db } from '../../firebase/firebaseConfig';
import AddTodo from './addtodo';
import TodoCard from './todocard';

import { async } from '@firebase/util';
import { getTodos } from '../../firebase/firebaseCRUD';
import { colorList } from '../../misc/color';

function TodoBoard() {

    const [todoTasks, settodoTasks] = useState([]);
    
    useEffect(() => {

        getTodos().then(returnedData => settodoTasks(returnedData));      
    })
    


    
    //calling data from database

    // this is the main todo board where are two parts

    const elem = (
           
            <ScrollView style = {styles.cardbox}
            
            >
                
                    {/* ---Here we will create cards that are list of todos actually  --- */}

                    {
                        todoTasks.map((eachtodo)=>{

                            const rend = (
                                <TodoCard
                                title = {eachtodo?.title}
                                description = {eachtodo?.description}
                                completed = {eachtodo?.completed}
                                id = {eachtodo.id}
                                />
                            );
                            return rend;

                        })
                    }
                    

                </ScrollView>



    );

    return elem;
    
};

export default TodoBoard;


const styles = StyleSheet.create({
    boardbox :{
       
    
        width : 400,
        borderColor : colorList[0],
        borderWidth : 2,
        borderRadius :10,
        padding :'1%',
        marginTop: '1%'
       

    },
   
   
    addbox : {
        backgroundColor : colorList[2],
        borderColor : colorList[0],
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
    
    width: 380,
    
    backgroundColor : colorList[3],
    padding :'1%',
    margin : '1%',
    marginTop : '1%',
    borderRadius : 10,
    


   }
  });
  