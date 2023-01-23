/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import { DropdownText } from './src/dropdownText';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
        <Text>Sup</Text>
        <DropdownText 
          data={["anird","mimir","niso","chizo","bhala","omer"]} style={{zIndex:2}}/>
        <Button title='remove focus' style={{zIndex:0}}/>
    </SafeAreaView>
  );
}

export default App;

const styles = new StyleSheet.create({
    container : {
      height:'100%',
      width:'100%',
      padding:24,
      display:'flex',
      flexDirection:'column'
    }
})