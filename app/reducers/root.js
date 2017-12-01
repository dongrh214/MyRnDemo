/**
 * Created by dongruihe on 2017/11/30.
 */
import { combineReducers } from 'redux';

import navReducer from './navReducer'
import authReducer from './authReducers'


const makeRootReducer = combineReducers({
    nav: navReducer,
});



export default makeRootReducer

