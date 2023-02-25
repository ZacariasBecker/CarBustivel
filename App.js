// Import React
import React, { useState } from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';

import MenuBar from './components/MenuBar';
import Registers from './pages/Registers';

const App = () => {

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar />
      <Registers />
      <MenuBar />
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
});
