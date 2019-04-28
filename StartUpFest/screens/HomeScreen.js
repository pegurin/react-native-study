import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CardView from '../components/CardView';
import RateScreen from './RateScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
    ActivityIndicator,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const GET_STARTUPS = gql`
{
    allStartups {
      name
      imageUrl
      segment_id
      teamCount
      annualReceipt
      description
      Segment {
        name
      }
    }
  }
`;
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Escolha sua StartUp!',
    };

    _renderItem = ({ item }) => (
            <CardView
                item={ item }
                navigation={ this.props.navigation }
            />
    );

    render() {
        return(
            <Query query={GET_STARTUPS}>
                {({ loading, error, data }) => {
                if (loading) return <ActivityIndicator style={styles.loader} size="large" color="#0000ff"/>;
                if (error) return <Text>`Error! ${error.message}`</Text>;

                return (
                    <View>
                        <ScrollView>
                            <FlatList
                                data={data.allStartups}
                                keyExtractor={(item, index) => item.name}
                                renderItem={this._renderItem}
                            />
                        </ScrollView>
                    </View>
                );
                }}
            </Query>
        );
    }
}

const styles = StyleSheet.create({
    itemCard: {
        alignItems: 'center',
        margin: 8,
        backgroundColor: 'blue',
    },
    loader: {
      flex: 1,
      justifyContent: 'center'
    },
});

const RootStack = createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Rate: {
        screen: RateScreen,
      },
    },
    {
      initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class HomeContainer extends React.Component {
    static navigationOptions = {
        header: null,
      };
    render() {
      return <AppContainer />;
    }
}
