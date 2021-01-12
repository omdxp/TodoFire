import auth from '@react-native-firebase/auth';

// This function handles the sign up with email and password
export function signUp(email, password) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created');
    })
    .catch((error) => {
      // If any error occured during sign up
      switch (error.code) {
        case 'auth/email-already-in-use':
          console.log('The email address is already in use');
          break;
        case 'auth/invalid-email':
          console.log('The email address is invalid!');
        default:
          console.log('Not defined error');
          break;
      }
      console.log(error);
    });
}

// This function handles the sign in with email and password
export function signUp(email, password) {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created');
    })
    .catch((error) => {
      // If any error occured during sign up
      switch (error.code) {
        case 'auth/email-already-in-use':
          console.log('The email address is already in use');
          break;
        case 'auth/invalid-email':
          console.log('The email address is invalid!');
        default:
          console.log('Not defined error');
          break;
      }
      console.log(error);
    });
}

// This function handles the sign out
export default function signOut() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}
