import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';
import Header from './shared/header';
import uuid from 'react-native-uuid';
import {connect} from 'react-redux';
import VisibleTodos from './shared/visible-todos';
import {addTodoAction} from '../redux/actions';

function Home({navigation, dispatch}) {
  const [todos, setTodos] = useState([]);
  const [visibilityFilter, setVisibilityFilter] = useState('SHOW_ALL_TODOS');
  const [item, setItem] = useState('');

  const addTodo = (text) => {
    //update redux
    dispatch(addTodoAction(text));
    setItem('');
  };

  return (
    <View style={globalStyles.container}>
      <Header navigation={navigation} />
      <View style={{marginVertical: 10}}></View>
      <View style={globalStyles.bodyContainer}>
        <View
          style={[
            globalStyles.row,
            {justifyContent: 'center', alignItems: 'stretch', height: 60},
          ]}>
          <TextInput
            value={item}
            style={[globalStyles.textInput, {width: 500}]}
            placeholder="Add item..."
            keyboardType="default"
            onChangeText={(text) => setItem(text)}
          />
          <View style={{marginHorizontal: 10}}></View>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => {
              addTodo(item);
            }}>
            <Text style={globalStyles.textButton}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 10}}></View>
        <View>
          <VisibleTodos />
        </View>
      </View>
    </View>
  );
}
export default connect()(Home);
