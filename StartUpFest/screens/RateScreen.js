import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import StarRating from 'react-native-star-rating';
import FirebaseService from '../services/FirebaseService';


export default class StartUpScreen extends React.Component {
    static navigationOptions = {
        title: 'StartUp',
    };

    constructor (props) {
        super(props);
        this.state = {
            proposal: 0,
            pitch: 0,
            development: 0,
        }
    }

    onStarRatingPress(key, rating) {
        this.setState({ [key]: rating });
    }

    onSave() {
        const { navigation } = this.props;
        const {
            proposal,
            pitch,
            development,
        } = this.state;
        
        const name = navigation.getParam('item').name;
        FirebaseService.pushData('votes', {
            name,
            proposal,
            pitch,
            development,
        });
    }

    render(){
        const { navigation } = this.props;
        const { proposal, pitch, development } = this.state;
        const item = navigation.getParam('item');
        return(
            <View>
                <ScrollView>
                    <Image
                        style={ styles.image }
                        source={{ uri: item.imageUrl }}
                        />
                    <Text style={ styles.textName }>{ item.name }</Text>
                    <Text style={ styles.textSegment }>{ item.Segment.name }</Text>
                    <Text style={ styles.textDescription }>{ item.description }</Text>
                    <Text style={ styles.textRating }>Proposta</Text>
                    <StarRating
                        containerStyle={ styles.starRating }
                        starSize={30}
                        disabled={false}
                        maxStars={5}
                        rating={proposal}
                        selectedStar= {(rating) => this.onStarRatingPress('proposal', rating)}
                    />
                    <Text style={ styles.textRating }>Apresentação/Pitch</Text>
                    <StarRating
                        containerStyle={ styles.starRating }
                        starSize={30}
                        disabled={false}
                        maxStars={5}
                        rating={pitch}
                        selectedStar= {(rating) => this.onStarRatingPress('pitch', rating)}
                    />
                    <Text style={ styles.textRating }>Desenvolvimento</Text>
                    <StarRating
                        containerStyle={ styles.starRating }
                        starSize={30}
                        disabled={false}
                        maxStars={5}
                        rating={development}
                        selectedStar= {(rating) => this.onStarRatingPress('development', rating)}
                    />
                    <Button
                        style={{ margin: 8 }}
                        title="Salvar"
                        onPress={() => this.onSave()}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 5,
        height: 200,
        width: 300,
        resizeMode: 'contain',
        margin: 8,
        alignSelf: 'center',
    },
    textName: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
    },
    textSegment: {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: '600',
        textAlign: 'center',
    },
    textDescription: {
        textAlign: 'justify',
        fontSize: 16,
        marginLeft: 8,
        marginRight: 8,
    },
    textRating: {
        marginTop: 8,
        marginBottom: 4,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    starRating: {
        alignSelf: 'center',
        width: 250,
    },
});