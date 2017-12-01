/**
 * Created by dongruihe on 2017/11/30.
 */
import { combineReducers } from 'redux';

import navReducer from './navReducer'


const makeRootReducer = combineReducers({
    nav: navReducer,
});



export default makeRootReducer

