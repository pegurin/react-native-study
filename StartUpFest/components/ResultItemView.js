import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';

const ResultItemView = ({ item, position, rate }) => {
    return(
        <View style={styles.card}>
            <Text style={styles.textPosition}>{position+1}º</Text>
            <Image style={styles.image}
                source={{uri: item.imageUrl}}
            />
            <View style={styles.viewDetails}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textSegment}>{item.segment}</Text>
                <View style={styles.viewRate}>
                    <StarRating
                        containerStyle={ styles.starRating }
                        starSize={25}
                        disabled={true}
                        maxStars={5}
                        rating={Number(rate)}
                    />
                    <Text style={styles.textRate}>{rate}/5</Text>
                </View>
            </View>
        </View>
    );
};

export default ResultItemView;

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textPosition: {
        fontSize: 26,
        marginLeft: 8,
    },
    image: {
        borderRadius: 5,
        height: 75,
        width: 100,
        resizeMode: 'contain',
        margin: 8,
        alignSelf: 'center',
    },
    viewDetails: {
        flexDirection: 'column',
    },
    textName: {
        marginTop: 4,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'left',
    },
    textSegment: {
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: '300',
        textAlign: 'left',
    },
    viewRate: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    textRate: {
        fontSize: 18,
        fontWeight: '300',
        marginLeft: 8,
        alignSelf: 'flex-end',
    },
    starRating: {
        alignSelf: 'flex-start',
        width: 150,
    },
});