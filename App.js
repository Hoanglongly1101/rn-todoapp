import {Text, View,ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import Task from './component/Task'
import styles from './App.components.style'
import Form from './component/Form'
const App = () => {
  const [taskList,setTaskList ] =  useState([])
  const handleAddTask = (task) =>{
    //Add task
    setTaskList([...taskList,task])
  }
  const handleDeleteTask = (index) => {
    Alert.alert(
      "Warning!!!",
      "Are you sure?",
      [
        {
          text: "OK",
          onPress: () => {
            let taskListTmp = [...taskList]
            taskListTmp.splice(index, 1)
            setTaskList(taskListTmp)
          }
        },
        { text: "Cancel", onPress: () => {} }
      ]
    );
  }
  return (
    <View style = {styles.container}>
      {/* body */}
      <View style ={styles.body}>
        <Text style = {styles.header}> Todo List</Text>
        {/* show items */}
        <ScrollView style = {styles.items}>
          {
            taskList.map((item, index)=>{
              return <Task key = {index} title ={item} number = {index+1} onDeleteTask = {() => handleDeleteTask(index)}/>
            })
          }
        </ScrollView>
      </View>
      {/* input */}
      <Form onAddTask={handleAddTask}/>
    </View>
  )
}
export default App
