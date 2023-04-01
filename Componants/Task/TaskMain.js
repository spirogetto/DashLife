import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskBoard from './TaskBoard'
import AddTask from './AddTask'

const TaskMain = () => {
  return (
    <View>
      <AddTask/>
      <TaskBoard/>
    </View>
  )
}

export default TaskMain

const styles = StyleSheet.create({})