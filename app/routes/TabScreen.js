/**
 * Created by dongruihe on 2017/11/30.
 */
import React, { PureComponent } from 'react'
import {
    Platform,
} from 'react-native'
import {TabNavigator,TabBarBottom} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeView from '../containers/Home/Home'
import ProdView from '../containers/Prod/Prod'
import MineView from '../containers/Mine/Mine'

import {Dimensions} from 'react-native'

const deviceW = Dimensions.get('window').width;

const basePx = 375;

function px2dp(px) {
    return px *  deviceW / basePx
}

class TabBarItem extends PureComponent {
    getImg(){
        if (this.props.focused) {
            return this.props.normalImage()
        } else {
            return this.props.selectedImage()
        }
    }
    render(){
        return this.getImg()
    }
}


const TabScreen = TabNavigator(
    {
        Home:{
            screen:HomeView,
            navigationOptions:({navigation}) => ({
                tabBarLabel:'首页',
                headerTitle:'首页',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
                        selectedImage={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
                    />
                )
            }),
        },

        Prod: {
            screen:ProdView,
            navigationOptions:({navigation}) => ({
                tabBarLabel:'商品',
                headerTitle:'商品',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={() => <Icon name="rocket" size={px2dp(22)} color="#666"/>}
                        selectedImage={() => <Icon name="rocket" size={px2dp(22)} color="#3496f0"/>}
                    />
                )
            }),
        },

        Mine:{
            screen:MineView,
            navigationOptions:({navigation}) => ({
                tabBarLabel:'我的',
                headerTitle:'我的',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
                        selectedImage={() => <Icon name="user" size={px2dp(22)} color="#3496f0"/>}
                    />
                )
            }),
        },
    },

    {
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled:false,
        animationEnabled:false,
        lazy:true,
        tabBarOptions:{
            activeTintColor:'#06c1ae',
            inactiveTintColor:'#979797',
            style:{backgroundColor:'#ffffff',},
            labelStyle: {
                fontSize: 12, // 文字大小
            },
        },
    }
);

export default TabScreen