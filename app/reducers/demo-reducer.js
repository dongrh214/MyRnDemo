/**
 * Created by dongruihe on 2017/11/30.
 */
import { combineReducers } from 'redux'
const ADD_NUM = 'ADD_NUM';

const initialState = {

}

const action = {
    [ADD_NUM](state) {
        return {
            ...state,
            isFetching: true
        }
    },
}

export default (state = initialState, { type, ...data }) => {
    return action[type] ? action[type](state, data) : state
}