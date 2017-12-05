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

import { NavigationActions } from 'react-navigation'

class Detail extends Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => {

    };

    render() {
        const navigateAction = NavigationActions.navigate({

            routeName: 'Chat',

            params: { user: 'Lily' },

        });
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View  style={ styles.container }>
                <Text>Accepted Params: {params.user}</Text>
                <Button
                    title="NavigationActions"
                    onPress={ () => this.props.navigation.dispatch(navigateAction) }
                ></Button>
            </View>
        );
    }
}

export default Detail

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