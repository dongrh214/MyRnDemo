/**
 * Created by dongruihe on 2017/11/30.
 */
import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import makeRootReducer from '../reducers/root'
const createStore = (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    // const middlewares = [thunk];
    const middlewares = [];
    middlewares.push();
    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = [];
    let composeEnhancers = compose;
    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createReduxStore(
        makeRootReducer(),
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares),
            ...enhancers
        )
    );
    store.asyncReducers = {};
    return store
};

export default createStore