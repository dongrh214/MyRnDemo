/**
 * Created by dongruihe on 2017/12/5.
 */
import { START, STOP, RESET, RUN_TIMER } from '../constants/timer';

const start = () => ({ type: START });
const stop = () => ({ type: STOP });
const reset = () => ({ type: RESET });
const runTime = () => ({ type: RUN_TIMER });

export {
    start,
    stop,
    reset,
    runTime
}