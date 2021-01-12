import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';
import Header from './shared/header';

export default function Home({navigation}) {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');
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
          <TouchableOpacity style={globalStyles.button}>
            <Text style={globalStyles.textButton}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
