/**
 * Created by dongruihe on 2017/11/30.
 */
import React, { PureComponent, Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native'


class Prod extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Prod!
                </Text>
                <Button
                    onPress={() => navigate('ProdDetail', { user: 'Lucy' })}
                    title="Chat with Lucy"
                />
            </View>
        )
    }
}

export default Prod

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});