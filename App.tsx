import React from 'react';
import {StyleSheet} from 'react-native';
import AuthNavigation from './src/navigations/AuthNavigation';
import DrawerNavigation from './src/navigations/DrawerNavigation';

function App() {
  // return <AuthNavigation />;
  return <DrawerNavigation />;
}

const styles = StyleSheet.create({});

export default App;
