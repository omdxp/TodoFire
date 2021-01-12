import React, {useState, useEffect} from 'react';
import Login from './screens/login';
import Home from './screens/home';
import auth from '@react-native-firebase/auth';

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

  return !user ? <Login /> : <Home />;
}
