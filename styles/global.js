import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#006699',
    alignItems: 'center',
  },
  button: {
    marginTop: 19,
    padding: 7,
    backgroundColor: '#FF6699',
    borderRadius: 20,
  },
  textButton: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  textInput: {
    width: '100%',
    backgroundColor: 'white',
    fontSize: 28,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#006699',
  },
});
