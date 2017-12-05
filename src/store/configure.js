/**
 * Created by dongruihe on 2017/11/30.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers/root';
import sagas from '../sagas';

const configureStore = preloadedState => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        preloadedState,
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
