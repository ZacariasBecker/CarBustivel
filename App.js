// Import React
import React, { useState } from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuBar from './components/MenuBar';

import Registers from './pages/Registers';
import Overview from './pages/Overview';
import Add from './pages/Add';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar />

        <Stack.Navigator initialRouteName="Registros">
          <Stack.Screen name="Resumo" component={Overview} />
          <Stack.Screen name="Registros" component={Registers} />
          <Stack.Screen name="Adicionar" component={Add} />
        </Stack.Navigator>

        <MenuBar />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
});
