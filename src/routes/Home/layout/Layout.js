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
import PropTypes from 'prop-types';


class Layout extends PureComponent {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        const { name, goToHomeDetail, goToProdDetail } = this.props
        return (
            <View style={ styles.container }>
                <Text>接受到的参数: { name }!</Text>
                <Button
                    onPress={() => goToHomeDetail({ user: 'Lucy' })}
                    title="前往HOME详情"
                />
                <Button
                    onPress={() => goToProdDetail({ user: 'Lucy' })}
                    title="前往PROD详情"
                />
            </View>
        );
    }
}
Layout.propTypes = {
    name: PropTypes.string.isRequired,
    goToHomeDetail: PropTypes.func.isRequired,
    goToProdDetail: PropTypes.func.isRequired,
};

export default Layout;

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