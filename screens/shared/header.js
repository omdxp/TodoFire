import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles/global';
import auth from '@react-native-firebase/auth';

export default function Header({navigation}) {
  return (
    <View style={[globalStyles.row, globalStyles.header]}>
      <Text style={globalStyles.text}>TodoFire</Text>
      <View style={{marginHorizontal: 10}}></View>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => {
          auth()
            .signOut()
            .then(() => navigation.navigate('Login'));
        }}>
        <Text style={globalStyles.textButton}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
