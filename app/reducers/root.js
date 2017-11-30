/**
 * Created by dongruihe on 2017/11/30.
 */
import { combineReducers } from 'redux';
import demoreducer from './demo-reducer';
export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        demoreducer: demoreducer,
        ...asyncReducers
    })
};
//注入新的reducer并更换store绑定的reducer
export const injectReducer = (store, {key, reducer}) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers))
};

export default makeRootReducer