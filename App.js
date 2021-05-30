import React, { useState } from "react";
import { Text, StyleSheet, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from "react-native";
import Task from './components/Task'
const TextInANest = () => {
  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    console.log("deleted");
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* THis is where the tabs will go  */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })
          }
          
        </View>
      </View>

      {/* Write a task */}

      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper} >
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeaed',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 15,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    width: '70%',
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    borderRadius: 35,
    borderColor: '#d400ffa0',
    borderWidth: 1,
    marginLeft: 20
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#d400ffa0',
    borderWidth: 1,
    marginRight: 20
  },
  addText: {
    fontSize: 30,
  },
});

export default TextInANest;