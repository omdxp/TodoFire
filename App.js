import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './routes/auth-stack';
import Login from './screens/login';
import Home from './screens/home';
import auth from '@react-native-firebase/auth';
import SignUp from './screens/signup';
import store from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

export default function App() {
  // States while firebase connection
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Function to handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <Provider store={store}>
      <PersistGate persistor={}>
        <NavigationContainer>
          <AuthStack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
            <AuthStack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <AuthStack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <AuthStack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
          </AuthStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
