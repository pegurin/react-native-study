import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { GRAPHQL_URL } from './constants/Config'

const client = new ApolloClient({
  uri: GRAPHQL_URL,
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={ client }>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
