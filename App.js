import { StatusBar } from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import TelaA from './src/views/TelaA'
import TelaB from './src/views/TelaB'
import TelaC from './src/views/TelaC'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <TelaA/>
      <TelaB/>
      <TelaC/>
      <StatusBar style="auto"backgroundColor="#fff" />
    </SafeAreaView>
  );
}



