/**
 * Created by dongruihe on 2017/11/30.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import makeRootReducer from '../reducers/root';
import sagas from '../sagas';

const configureStore = (initialState = {}, initialReducer = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        makeRootReducer(initialReducer),
        initialState,
        compose (
            applyMiddleware(sagaMiddleware)
        )
    )

    sagaMiddleware.run(sagas);
    store.close = () => store.dispatch(END);
    return store;
}

const store = configureStore();
export default store;
