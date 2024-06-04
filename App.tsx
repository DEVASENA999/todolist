import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function App() {
  const [todos, setTodos] = useState([{ text: 'Drink water', dateTime: new Date() }, { text: 'eat food', dateTime: new Date() }, { text: 'sleep well', dateTime: new Date() }]);
  const [text, setText] = useState('');

  const Add = () => {
    if (text === "") {
      alert("Please enter Todo to Add")
    } else {
      setTodos([...todos, { text, dateTime: new Date() }])
      setText("")
    }
  }

  const Update = (index) => {
    setText(todos[index].text)
    todos.splice(index, 1)
    setTodos([...todos])
  }

  const Delete = (index) => {
    todos.splice(index, 1)
    setTodos([...todos])
  }

  const DeleteAll = () => {
    setTodos([])
  }

  return (
    <View style={styles.Todo_Container}>
      <View style={styles.Todo_Header}>
        <Text style={styles.Heading}>✅ TODO APP</Text>
      </View>
      <View style={styles.Todo_Body}>
        <TextInput
          style={{ backgroundColor: 'ffffff', color: 'white', height: 55 }}
          label="Enter Todos"
          value={text}
          onChangeText={text => setText(text)}
        />
        <View style={styles.Body}>
          <Button
            style={{ marginTop: 10, width: '48.5%', color: 'White', marginRight: 5 }}
            mode="contained"
            color={'#2979ff'}
            onPress={Add}
          >
            ➕ ADD
          </Button>
          <Button
            style={{ marginTop: 10, width: '48.5%', color: 'White', marginLeft: 5 }}
            mode="contained"
            color={'#2979ff'}
            onPress={DeleteAll}
          >
            ❌ DELETE ALL
          </Button>
        </View>
      </View>
      <ScrollView>
        {todos.map((data, index) => {
          const dateTime = data.dateTime.getDate() + '-' + (data.dateTime.getMonth() + 1) + '-' + data.dateTime.getFullYear() + " " + data.dateTime.getHours() + ":" + data.dateTime.getMinutes();
          return <TouchableOpacity activeOpacity={.7} style={styles.Todo_Footer} key={index}>
            <Text style={styles.Text}>{data.text}</Text>
            <Text style={styles.DateTime}>{dateTime}</Text>
            <Button style={styles.Edit_Button} color={'#ffff'} onPress={() => Update(index)}> ✏️</Button>
            <Button style={styles.Del_Button} color={'#ffff'} onPress={() => Delete(index)}> 🗑️</Button>
          </TouchableOpacity>;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Todo_Container: {
    flex: 1,
    backgroundColor: '#42a5f5',
  },
  Todo_Header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  Heading: {
    fontWeight: 'bold',
    fontSize: 37,
    color: 'white',
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowRadius: 10,
  },
  Todo_Body: {
    flex: -1,
    padding: 10,
  },
  Body: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  Todo_Footer: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    margin: 5,
  },
  Text: {
    width: '80%',
    paddingBottom: 5,
    textTransform: 'capitalize',
    color: '#000000',
  },
  DateTime: {
    position: 'absolute',
    left: 10,
    bottom: 1,
    fontSize: 7,
    color: '#000000',
  },
  Edit_Button: {
    position: 'absolute',
    right: 25,
  },
  Del_Button: {
    position: 'absolute',
    right: -15,
  },
});