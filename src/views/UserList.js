import React from 'react'
import {View,Text,FlatList} from 'react-native'
import users from '../data/users'
import { Avatar, ListItem, Button, Icon } from 'react-native-elements'


export default props => {

  function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
              {
                  text: 'Sim'
              },
              {
                  text: 'Não'
              }
        ])
  }

  function getUserItem({ item: user }) {
      return (
        <ListItem
                  bottomDivider
                  onPress= {() => props.navigation.navigate('UserForm')}>
                    <Avatar title={user.name} source={{uri: user.avatarURL}}/>
            <ListItem.Content>
                  <ListItem.Title>{user.name}</ListItem.Title>
                  <ListItem.Subtitle>{user.telefone}</ListItem.Subtitle>

            </ListItem.Content> 
            <ListItem.Chevron />
            

            <Icon
              raised
              name='pencil'
              type='font-awesome'
              color='orange'
              onPress={() => props.navigation.navigate('UserForm', user)}/>
            
            <Icon
              raised
              name='trash'
              type='font-awesome'
              color='red'
              onPress={() => props.navigation.navigate('UserForm', user)}/>
              
        </ListItem>  
      );
      
  }
  
    return (
      <View>
          <FlatList
            keyExtractor={user => user.id.toString()}
            data={users}
            renderItem={getUserItem}
          /> 
      </View>
    )
}