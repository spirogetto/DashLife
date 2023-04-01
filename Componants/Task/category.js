import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colorList } from '../../misc/color'
const Category = (prop) => {

    function press(){
        prop.seta(prop.name, false)
    }



  return (
    <Pressable style= {styles.categorybox}
    onPress={() => press()}>

        <Text>{prop.name}</Text>


    </Pressable>
  )
}

export default Category

const styles = StyleSheet.create({


    categorybox :{

        borderColor : colorList[5],
        borderWidth : 2,
        borderRadius :10,
        padding :'5%',
        margin : '1%',
        backgroundColor : colorList[3]
    
    },
})