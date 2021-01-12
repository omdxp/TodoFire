import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';

export default function Login() {
  return (
    <View style={globalStyles.container}>
      <TextInput
        style={globalStyles.textInput}
        keyboardType="email-address"
        placeholder="Enter your email"
      />
      <View style={{marginVertical: 10}}></View>
      <TextInput
        style={globalStyles.textInput}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.textButton}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
