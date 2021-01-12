import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {globalStyles} from '../styles/global';
import auth from '@react-native-firebase/auth';

export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Image
          style={globalStyles.logo}
          source={require('../assets/Todofire.png')}
        />
        <View style={{marginVertical: 10}}></View>
        <TextInput
          style={globalStyles.textInput}
          keyboardType="default"
          placeholder="Enter your name"
          onChangeText={(text) => setName(text)}
        />
        <View style={{marginVertical: 10}}></View>
        <TextInput
          style={globalStyles.textInput}
          keyboardType="default"
          placeholder="Enter your surname"
          onChangeText={(text) => setSurname(text)}
        />
        <View style={{marginVertical: 10}}></View>
        <TextInput
          style={globalStyles.textInput}
          keyboardType="email-address"
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
        />
        <View style={{marginVertical: 10}}></View>
        <TextInput
          style={globalStyles.textInput}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={globalStyles.button}
          onPress={async () => {
            if (email.length === 0 || password.length === 0) {
              setErrorMessage('The email and password must have values');
              return;
            }
            auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                setErrorMessage('');
                setName('');
                setPassword('');
                setEmail('');
                setPassword('');
                navigation.navigate('Home');
              })
              .catch((error) => setErrorMessage(error.message));
          }}>
          <Text style={globalStyles.textButton}>Sign up</Text>
        </TouchableOpacity>
        {errorMessage.length !== 0 ? (
          <Text style={[globalStyles.text, {color: 'red'}]}>
            {errorMessage}
          </Text>
        ) : (
          <View></View>
        )}
        <View style={{marginVertical: 10}}></View>

        <View style={globalStyles.row}>
          <Text style={globalStyles.text}>Already have an account?</Text>
          <View style={{marginHorizontal: 10}}></View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[globalStyles.text, {color: '#FF6690'}]}>
              Login here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
