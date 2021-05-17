import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Scan from './.expo-shared/Screens/Scan';

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation'
export default class App extends React.Component {



render(){
  return (
    <View style={styles.container}>
 <AppContainer/>     
     
    </View>
  );
}
}
const TabNavigator=createBottomTabNavigator({
  Scan:{screen:Scan},
})
const AppContainer=createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
