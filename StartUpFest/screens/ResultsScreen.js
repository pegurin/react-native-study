import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import FirebaseService from '../services/FirebaseService';
import ResultItemView from '../components/ResultItemView';

export default class ResultsScreen extends React.Component {
    static navigationOptions = {
      title: "Resultados",
    };

    constructor (props) {
        super(props);
        this.state = {
            resultProposal: [],
            resultPitch: [],
            resultDevelopment: [],
        }
    }

    _renderItem = ({item, index}, separator ,tag) => {
        return (
            <ResultItemView
                item={ item }
                position={ index }
                rate={ item[tag].toPrecision(2) }
            />
        );
    }

    sortByRate = (result) => {
        const sortProposal = result.sort((a, b) => Number(b.proposal.toPrecision(2) - Number(a.proposal.toPrecision(2))));
        this.setState({
            resultProposal: sortProposal,
        });
        
        const sortPitch = result.sort((a, b) => Number(b.pitch.toPrecision(2)) - Number(a.pitch.toPrecision(2)));
        this.setState({
            resultPitch: sortPitch,
        });

        const sortDevelopment = result.sort((a, b) => Number(b.development.toPrecision(2)) - Number(a.development.toPrecision(2)));        
        this.setState({
            resultDevelopment: sortDevelopment,
        });
    }

    componentWillMount() {
        FirebaseService.getDataList('results', (results) => this.sortByRate(results));
    }
    render() {
        const {
            resultProposal,
            resultPitch,
            resultDevelopment,
        } = this.state;
        return(
            <View>
                <ScrollView>
                    <Text style={styles.text}>Proposta</Text>
                    <FlatList
                        data={resultProposal}
                        renderItem={(item, index) => this._renderItem(item, index, 'proposal')}
                    />
                    <Text style={styles.text}>Apresentação / Pitch</Text>
                    <FlatList
                        data={resultPitch}
                        renderItem={(item, index) => this._renderItem(item, index, 'pitch')}
                    />
                    <Text style={styles.text}>Desenvolvimento</Text>
                    <FlatList
                        data={resultDevelopment}
                        renderItem={(item, index) => this._renderItem(item, index, 'development')}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        margin: 8,
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'left',
    },
});