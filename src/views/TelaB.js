import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text} from 'react-native'


export default props => (
    
      <SafeAreaView style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#3b82c4'}}>
        <Text style={{
          fontSize: 30      
          }}>TelaB</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    
)
 