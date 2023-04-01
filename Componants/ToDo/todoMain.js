import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'
import TodoBoard from './todoboard'
import { colorList } from '../../misc/color'
import AddTodo from './addtodo'

const TodoMain = () => {
  return (

    <View>
        <AddTodo/>    
      <TodoBoard/>
    </View>
    
  )
}

export default TodoMain;

const styles = StyleSheet.create({
    addTodoBtn: {
        width : '1%',
        borderRadius :50,
      
    },
})