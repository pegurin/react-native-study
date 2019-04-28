import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

const CardView = ({ item, navigation }) => {
    const getScreen = (item) => {
        navigation.navigate('Rate', { item: item });
    };
    return(
        <TouchableHighlight underlayColor= 'transparent' onPress= {() => getScreen(item)}>
            <View style={styles.card}>
                <Image
                    style={styles.startUpImage}
                    source={{uri: item.imageUrl}}
                />
                <View>
                    <Text>{ item.name }</Text>
                    <Text>{ item.Segment.name }</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default CardView;

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
    startUpImage: {
        borderRadius: 5,
        height: 50,
        width: 100,
        resizeMode: 'contain',
        margin: 8,
    },
});
