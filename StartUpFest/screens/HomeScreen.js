import React from 'react';
import { Text } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    render() {
        return(
            <Text>Home</Text>
        );
    }
}
