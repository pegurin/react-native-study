import React from 'react';
import { Text } from 'react-native';
import StarRating from 'react-native-star-rating';
import FirebaseService from '../services/FirebaseService';

export default class ResultsScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    render() {
        FirebaseService.getDataList('result', (result) => console.log(result));
        return(
            <Text>Resultados</Text>
        );
    }
}
