import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text} from 'react-native'


export default props => (
    
      <SafeAreaView style={{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#e53935'}}>
        <Text style={{
          fontSize: 30      
          }}>TelaA</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    
)
 