import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserList from './src/components/UserList'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from  '@react-navigation/native'
import DetailedUser from './src/components/DetailedUser';

export default function App() {
  const Tab = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='UserList' component={UserList}/>
        <Tab.Screen name='Detailed' component={DetailedUser} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
