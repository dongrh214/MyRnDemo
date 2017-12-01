/**
 * Created by dongruihe on 2017/11/30.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import {
    Easing,
    Animated
} from 'react-native'


import TabBarScreen from './TabBar/container/TabBar'
import HomeDetailScreen from './Detail/container/Detail'
import ProdDetailScreen from './ProdDetail/container/ProdDetail'


export const AppNavigator =  StackNavigator({
    TabBar:{screen:TabBarScreen},
    HomeDetail: {
        screen: HomeDetailScreen,

    },
    ProdDetail: {
        screen: ProdDetailScreen,
        navigationOptions: ({navigation}) => ({
            title: navigation.state.params.user,
        }),
    },

}, {
    navigationOptions:{
        headerBackTitle:null,
        headerTintColor:'#333333',
        showIcon:true,
        swipeEnabled:false,
        animationEnabled:false,
    },
    mode:'card',

    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        }
    }),
});


const AppNavigatorWithState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppNavigatorWithState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigatorWithState);
