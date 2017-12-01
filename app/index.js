/**
 * Created by dongruihe on 2017/11/30.
 */
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import AppNavigatorWithState from './routes/AppNavigator';

import AppReducer from './reducers/root';


export default class Root extends PureComponent {
    store = createStore(AppReducer);
    render() {
        return (
            <Provider store={this.store}>
                <AppNavigatorWithState />
            </Provider>
        )
    }
}

