import React from 'react';
import { Text } from 'react-native';

export default class ResultsScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    render() {
        return(
            <Text>Resultados</Text>
        );
    }
}
