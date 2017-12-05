/**
 * Created by dongruihe on 2017/11/30.
 */
import React, { PureComponent, Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    Button,
    View,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux';

import { reset, start, stop } from '../../../actions/timer';
import baseStyles from '../../../styles/base'


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



class Mine extends Component {
    _onPressReset() {
        this.props.dispatch(reset());
    }

    _onPressInc() {
        this.props.dispatch(start());
    }

    _onPressDec() {
        this.props.dispatch(stop());
    }

    render() {
        const { seconds } = this.props.timer;
        console.log('this:',this)
        return (
            <View style={styles.container}>
                <Text>saga异步处理测试</Text>
                <Text style={styles.counter}>{seconds}</Text>
                <TouchableOpacity  onPress={()=>this._onPressReset()}>
                    <Text style={ [baseStyles.border,styles.btn] }>重置</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPressInc()}>
                    <Text  style={ [baseStyles.border,styles.btn] }>开始</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPressDec()}>
                    <Text  style={ [baseStyles.border,styles.btn] }>停止</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    counter: {
        fontSize: 70,
        marginBottom: 70,
        color: '#FF8500'
    },
    btn: {
        width: 100,
        height: 50,
        margin: 10,
        backgroundColor: 'yellow',
        textAlign:'center',
        lineHeight:50
    }
});


const mapStateToProps = state => ({
    timer: state.timer
});
export default connect(mapStateToProps)(Mine)