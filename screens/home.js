import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';
import Header from './shared/header';
import uuid from 'react-native-uuid';

function Home({navigation, state}) {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');

  console.log(state);

  useEffect(() => {
    console.log('useEffect ran', items);
  }, [items]);

  const addItemHandler = (item) => {
    var itemAlreadyAdded = false;
    if (item.length < 3) {
      Alert.alert('Alert', 'Items must contain more than 3 characters', ['Ok']);
      return;
    }
    items.forEach((i) => {
      if (item === i.item) itemAlreadyAdded = true;
    });
    if (itemAlreadyAdded) {
      Alert.alert('Alert', 'You already added this item', ['Ok']);
      return;
    } else {
      setItems([...items, {item, id: uuid.v4()}]);
      console.log(items);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Header navigation={navigation} />
      <View style={{marginVertical: 10}}></View>
      <View style={globalStyles.bodyContainer}>
        <View
          style={[
            globalStyles.row,
            {justifyContent: 'center', alignItems: 'stretch'},
          ]}>
          <TextInput
            style={[globalStyles.textInput, {width: 500}]}
            placeholder="Add item..."
            keyboardType="default"
            onChangeText={(text) => setItem(text)}
          />
          <View style={{marginHorizontal: 10}}></View>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => {
              addItemHandler(item);
            }}>
            <Text style={globalStyles.textButton}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Home;
