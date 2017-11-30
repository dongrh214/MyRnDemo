/**
 * Created by dongruihe on 2017/11/30.
 */
import React, { PureComponent, Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native'

import {NavigationActions} from 'react-navigation';
import AppNavigator from '../routes/index'


class MainLayout extends React.Component {
    someEvent() {
        // call navigate for AppNavigator here:
        this.navigator && this.navigator.dispatch(
            NavigationActions.navigate({ routeName: 'Detail' })
        );
    }
    render() {
        return (
            <AppNavigator ref={nav => { this.navigator = nav; }} />
        );
    }
}



export default MainLayout

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