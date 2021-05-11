import * as React from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';

export default class Facebook extends React.Component {
    render() {
        return (
            <View>
            <Header
            backgroundColor={'pink'}
            centerComponent={{
                text: 'Buzz App',
                style: { color: 'black', fontSize: 30 },
            }}
            />
            <Text style = {{
                alignSelf: 'center',
                marginTop: 200,
                fontSize: 30,
                color: '#3b5998',
                fontWeight: 'bold'
            }}>Facebook</Text>
            </View>
        );
    }
}