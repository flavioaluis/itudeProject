import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import UserForm from './src/views/UserForm'
import UserList from './src/views/UserList'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen
                name="UserList"
                component={UserList}
              />
              <Stack.Screen
                name="UserForm"
                component={UserForm}
              />
        </Stack.Navigator>
      <StatusBar style="auto"backgroundColor="#fff" />
    </NavigationContainer>
  );
}



