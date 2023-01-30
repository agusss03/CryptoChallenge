import AddCryptos from './src/Screens/AddCryptos/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Screens/Home';
import 'react-native-gesture-handler';
import store from './src/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddCryptos" component={AddCryptos} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
