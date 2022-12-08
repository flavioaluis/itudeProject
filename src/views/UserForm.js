import React, {useState, useContext} from 'react'
import {Text, View, TextInput, StyleSheet, Button} from 'react-native'
import UsersContext from '../context/UsersContext'


export default ({ route, navigation}) => {
      const [user, setUser] = useState(route.params ? route.params: {})
      const { dispatch }= useContext(UsersContext)

      return (
            <View style={style.form}>
                  <Text>Name</Text>
                  <TextInput
                        style={style.input} 
                        onChangeText = {name => setUser({...user, name})}
                        placeholder = " Informe o Nome"
                        value={user.name}
                  />
            
                  <Text>Email</Text>
                  <TextInput  
                        style={style.input}
                        onChangeText = {email => setUser({...user, email})}
                        placeholder = " Informe o Email"
                        value={user.email}
                  />

                  <Text>Telefone</Text>
                  <TextInput 
                        style={style.input}
                        onChangeText = {telefone => setUser({...user, telefone})}
                        placeholder = " Informe o Telefone"
                        value={user.telefone}
                  />
                  <Text>CPF</Text>
                  <TextInput
                        style={style.input}
                        onChangeText = {CPF => setUser({... user, CPF})}
                        placeholder = " Informe o CPF"
                        value={user.CPF}
                  />       

                  <Text>URL do Avatar</Text>
                  <TextInput
                        style={style.input}
                        onChangeText = {avatarURL => ({... user, avatarURL})}
                        placeholder = ' Informe a URL do Avatar'
                        value={user.avatarURL}
                  />                 
                  <Button
                        title= "Salvar"
                        onPress={() => {
                              dispatch({
                                    type: user.id ? 'updateUser' : 'createUser',
                                    payload:user, 
                              })
                              navigation.goBack()
                        }}
                  />

            </View>
      )
      
}

const style = StyleSheet.create ({
      form:{
            padding:14
      },
      input: {
            paddingLeft:8,
            height:40,
            borderColor: 'gray',
            borderRadius:4,
            borderWidth:2,
            marginBottom: 10,

      }

})