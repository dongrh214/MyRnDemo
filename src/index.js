/**
 * Created by dongruihe on 2017/11/30.
 */
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import AppNavigatorWithState from './routes/AppNavigator';

import store from './store/configure'



export default class Root extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AppNavigatorWithState />
            </Provider>
        )
    }
}

