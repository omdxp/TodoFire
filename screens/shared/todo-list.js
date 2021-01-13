import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles/global';

export default function TodoList({todos, toggleTodo}) {
  return (
    <View>
      {todos.map((todo) => (
        <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
          <Text
            style={[
              globalStyles.text,
              {
                textDecorationLine: todo.completed ? 'line-through' : 'none',
                color: 'black',
              },
            ]}>
            {todo.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
