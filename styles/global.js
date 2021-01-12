import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#006699',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#D8D8D8',
    borderRadius: 27,
    padding: 19,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  button: {
    marginTop: 19,
    padding: 7,
    backgroundColor: '#FF6699',
    borderRadius: 20,
  },
  textButton: {
    fontFamily: 'HachiMaruPop-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 28,
    color: 'white',
  },
  textInput: {
    fontFamily: 'HachiMaruPop-Regular',
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    fontSize: 28,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#006699',
  },
  logo: {
    height: 319,
    width: 319,
    borderRadius: 319 / 2,
  },
  text: {
    fontFamily: 'HachiMaruPop-Regular',
    fontSize: 27,
    color: 'white',
  },
  header: {
    backgroundColor: '#ab44ab',
    width: '100%',
    borderRadius: 27,
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    padding: 10,
  },
});
