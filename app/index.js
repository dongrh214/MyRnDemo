/**
 * Created by dongruihe on 2017/11/30.
 */
import React, { PureComponent } from 'react'
import MainLayout from './layout/MainLayout'
import { Provider } from 'react-redux'
import createStore from './store/configure'
const store = createStore();

export default class Root extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <MainLayout />
            </Provider>
        )
    }
}