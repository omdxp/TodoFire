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
import LoadingIcon from './shared/loading';
import {SizedBox} from 'sizedbox';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Image
          style={globalStyles.logo}
          source={require('../assets/Todofire.png')}
        />
        <SizedBox vertical={10} />
        <TextInput
          value={email}
          style={globalStyles.textInput}
          keyboardType="email-address"
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
        />
        <SizedBox vertical={10} />
        <TextInput
          value={password}
          style={globalStyles.textInput}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <SizedBox vertical={10} />
        <TouchableOpacity
          disabled={isLoading}
          style={globalStyles.button}
          onPress={() => {
            setIsLoading(true);
            if (email.length === 0 || password.length === 0) {
              setErrorMessage('The email and password must have values');
              setIsLoading(false);
              return;
            }
            auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                setErrorMessage('');
                setPassword('');
                setEmail('');
                setPassword('');
                setIsLoading(false);

                navigation.navigate('Home');
              })
              .catch((error) => setErrorMessage(error.message));
          }}>
          <Text style={globalStyles.textButton}>Sign in</Text>
        </TouchableOpacity>
        {isLoading ? <LoadingIcon /> : <View />}
        {errorMessage.length !== 0 ? (
          <Text style={[globalStyles.text, {color: 'red'}]}>
            {errorMessage}
          </Text>
        ) : (
          <View></View>
        )}
        <SizedBox vertical={10} />

        <View style={globalStyles.row}>
          <Text style={globalStyles.text}>Don't have an account?</Text>
          <View style={{marginHorizontal: 10}}></View>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[globalStyles.text, {color: '#FF6690'}]}>
              Sign up here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
