import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {collection, getDocs} from 'firebase/firestore'
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { db } from '../../firebase/firebaseConfig';
import { async } from '@firebase/util';
import { getTasks, getTodos } from '../../firebase/firebaseCRUD';
import { colorList } from '../../misc/color';
import TaskCard from './TaskCard';

function TaskBoard() {

    const [Tasks, setTasks] = useState([]);
    
    useEffect(() => {

        getTasks().then(returnedData => setTasks(returnedData));      
    })
    //calling data from database

    // this is the main todo board where are two parts

    const elem = (
                <FlatList
                style ={styles.boardbox}
                data={Tasks}
                renderItem={({item})=>(
                        <TaskCard
                            category = {item.category}
                            hour = {item.hour}
                            minute = {item.minute}
                            id = {item?.id}
                            />
    )}
                />



    );
    return elem ;
    
};

export default TaskBoard;


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