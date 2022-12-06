import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { Button, Icon } from 'react-native-elements'

import UserForm from './src/views/UserForm'
import UserList from './src/views/UserList'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator 
          initialRouteName= "UserList"
          screenOptions={screenOptions}>
              <Stack.Screen
                name="UserList"
                component={UserList}
                options={({navigation}) =>{
                  return {
                    title: "Lista de Usuários",
                    headerRight: () => (
                      <Button 
                          onPress = {() => navigation.navigate("UserForm")}
                          type = "clear"
                          icon = {<Icon name="add" size={25} color="white"/>}
                      />  
                    )
                  }
                }}
              />
              <Stack.Screen
                name="UserForm"
                component={UserForm}
                options={{
                    title:"Formulário de Usuários"
                }}
              />
        </Stack.Navigator>
      <StatusBar style="auto"backgroundColor="#fff" />
    </NavigationContainer>
  );
}

const screenOptions = {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: "bold"
    }
}


