import {  KeyboardAvoidingView, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { addNewTask, addNewTodo } from '../../firebase/firebaseCRUD';
import { colorList } from '../../misc/color';
import Category from './category';

const demoCat = ['Walk', 'Social', 'Job', 'Transportation', 'Exercise', ]

function AddTask(prop) {

    const [category, setcategory] = useState('Select Category...')
    const [hour, sethour] = useState('')
    const [minute, setminute] = useState('')
    const [modalVis, setmodalVis] = useState(false)
    const [subBtn, setsubBtn] = useState(false)
    const [submit, setsubmit] = useState('Fill Up')

    function catPress(){
        setmodalVis(true);
        setsubBtn(true);
        setsubmit('Submit');
    };

    function seta(catFromChild){

        setcategory(catFromChild);
        setmodalVis(false);
;
    }
    

    function adding (){

        if(subBtn){


        addNewTask({category:category, minute:minute, hour : hour})
        setcategory('Select Category...')

        };
        //up to data base
        
    };

    const elem  = (

        <KeyboardAvoidingView style =  {styles.AddTaskcontainer}> 

            <Modal
            transparent = {true}
            visible = {modalVis}
            >

                <ScrollView style={styles.modalBox}>
                    {demoCat.map((eachCat)=> {
                            const cat = (
                                <Category
                                name = {eachCat}
                                seta = {seta}
                                />
                            );
                            return cat;
                        })
                    }
                    <Text>{category}</Text>

                    
                </ScrollView>



            </Modal>

            <Pressable  onPress={()=>catPress()}>
            <View style={styles.catShow}> 
                <Text style= {styles.catShowText}>{category}</Text>
            </View>
            </Pressable>
        
            

            <TextInput
            placeholder= 'hour...'
            keyboardType='number-pad'
            style = {styles.categoryInput}
            returnKeyType = 'next'
            // onSubmitEditing={()=> adding() }
            onChangeText ={(val => sethour(val))}
            />

            <TextInput
            placeholder= 'minute...'
            keyboardType='number-pad'
            style = {styles.categoryInput}
            returnKeyType = 'done'
            onChangeText ={(val => setminute(val))}
            />

            <Pressable 
            onPress={()=>adding()}>
            <View
            style={styles.catBtn}>
                <Text>{submit}</Text>
            </View>
            </Pressable>

            
        </KeyboardAvoidingView>
    );

    return elem;
    
}

export default AddTask;


const styles = StyleSheet.create({
    AddTaskcontainer: {
        backgroundColor :colorList[0],
        margin: 10,
        borderRadius : 10,
      
    },
  
   categoryInput : {

    borderBottomColor : '#d8d8d8',
    borderStyle : 'solid',
    borderBottomWidth :2,
    padding : 10,
    margin : 15,
    backgroundColor : '#FFFF',
    borderRadius : 10,
   },


   modalBox :{

    
    borderRadius :10,
    padding :'5%',
    margin : '10%',
    height : 500,
    backgroundColor : '#eef9'

   },

   catBtn:{
    backgroundColor : colorList[5],
    alignSelf : 'center',
    margin: '5%',
    padding : '5%',
    borderRadius : 50
   },

   press:{
    backgroundColor : colorList[3],
    margin : '2%',
    alignSelf : 'flex-start',
    borderRadius : 20,
   },

   catShow:{
    backgroundColor : colorList[2],
    margin: '5%',
    padding : '5%',
    borderRadius : 10,
    color : colorList[5]

   },

   catShowText : {
    fontWeight : 600,
    color : colorList[5],
   }


  });
  