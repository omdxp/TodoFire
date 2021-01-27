import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todos', 'visibilityFilter'],
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

export default persistedReducers;
