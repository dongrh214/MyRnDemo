/**
 * Created by dongruihe on 2017/11/30.
 */
import {StackNavigator} from 'react-navigation';
import TabScreen from './TabScreen'
import ChatScreen from '../containers/Detail/Detail'


export default StackNavigator({
    Tab:{screen:TabScreen},
    Chat: { screen: ChatScreen },

}, {
    navigationOptions:{
        headerBackTitle:null,
        headerTintColor:'#333333',
        showIcon:true,
        swipeEnabled:false,
        animationEnabled:false,
    },
    mode:'card',
});