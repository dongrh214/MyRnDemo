/**
 * Created by dongruihe on 2017/12/5.
 */
import { takeEvery, delay } from 'redux-saga';
import { put, call, take, fork, cancel, cancelled } from 'redux-saga/effects';
import { START, STOP, RESET } from '../constants/timer';
import { stop, runTime } from '../actions/timer';

function* watchStart() {
    // 一般用while循环替代 takeEvery
    while (true) {
        // take: 等待 dispatch 匹配某个 action
        yield take(START);
        // 通常fork 和 cancel配合使用，实现非阻塞任务，take是阻塞状态，fork是非阻塞的
        var runTimeTask = yield fork(timer);
        yield take(STOP);
        // cancel: 取消一个fork任务
        yield cancel(runTimeTask);
    }
}

function* watchReset() {
    while (true) {
        yield take(RESET);
        yield put(stop());
    }
}

function* timer() {
    try {
        while(true) {
            // call: 有阻塞地调用 saga 或者返回 promise 的函数，只在触发某个动作
            yield call(delay, 1000);
            // put: 触发某个action， 作用和dispatch相同
            yield put(runTime());
        }
    } finally {
        if (yield cancelled()) {
            console.log('取消了runTimeTask任务');
        }
    }
}


export default function* rootSaga() {
    yield fork(watchStart);
    yield fork(watchReset)
}
