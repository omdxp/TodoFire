import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Animated,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';
import Header from './shared/header';
import uuid from 'react-native-uuid';
import {connect} from 'react-redux';
import VisibleTodos from './shared/visible-todos';
import {addTodoAction} from '../redux/actions';
import TodoList from './shared/todo-list';

function Home({navigation, dispatch}) {
  const [todos, setTodos] = useState([]);
  const [visibilityFilter, setVisibilityFilter] = useState('SHOW_ALL_TODOS');
  const [item, setItem] = useState('');

  // This is for the custom scrollbar indicator
  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : visibleScrollBarHeight;

  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight,
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp',
  });

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
        <ScrollView>
          <VisibleTodos />
        </ScrollView>

        {/* <ScrollView
          contentContainerStyle={{paddingRight: 14}}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={(height) => {
            setCompleteScrollBarHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: {height},
            },
          }) => {
            setVisibleScrollBarHeight(height);
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollIndicator}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}>
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 20}}>
            <VisibleTodos />
            <View
              style={{
                justifyContent: 'flex-end',
                height: '100%',
                width: 10,
                backgroundColor: '#52057b',
                borderRadius: 8,
              }}>
              <Animated.View
                style={{
                  width: 10,
                  borderRadius: 8,
                  backgroundColor: '#bc6ff1',
                  height: scrollIndicatorSize,
                  transform: [{translateY: scrollIndicatorPosition}],
                }}
              />
            </View>
          </View>
        </ScrollView> */}
      </View>
    </View>
  );
}
export default connect()(Home);
