/**
 * Created by dongruihe on 2017/11/30.
 */
import { combineReducers } from 'redux';

import navReducer from './navReducer'
import timer from './timer'


const makeRootReducer = combineReducers({
    nav: navReducer,
    timer
});



export default makeRootReducer

